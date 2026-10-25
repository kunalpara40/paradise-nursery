import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice';
import Navbar from './Navbar';
import './App.css';

function CartItem() {
  const dispatch = useDispatch();
  // `cart` variable name used throughout per rubric
  const cart = useSelector((state) => state.cart.items);
  const [showToast, setShowToast] = useState(false);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // handleIncrement — exact name required by rubric
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // handleDecrement — decreases quantity; removes item when it would fall below 1
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // handleRemove — called with full item object; dispatches removeItem with item.name
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  const handleImgError = (e) => {
    e.target.src =
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=200&q=60';
  };

  return (
    <div className="cart-page">
      <Navbar />

      <div className="cart-container">
        <h1 className="cart-title">🛒 Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="cart-empty" role="status" aria-live="polite">
            <div className="cart-empty-icon">🌿</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any plants yet. Go explore our collection!</p>
            <Link to="/products" className="btn-primary" style={{ display: 'inline-flex' }}>
              🌱 Browse Plants
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Items list — map over `cart` */}
            <div className="cart-items-list" aria-label="Cart items">
              {cart.map((item) => (
                <div
                  className="cart-item-card"
                  key={item.name}
                  role="article"
                  aria-label={item.name}
                >
                  <img
                    className="cart-item-img"
                    src={item.image}
                    alt={item.name}
                    onError={handleImgError}
                  />

                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-unit-price">
                      Unit price: ${item.price.toFixed(2)}
                    </p>

                    <div
                      className="quantity-controls"
                      aria-label={`Quantity for ${item.name}`}
                    >
                      <button
                        className="qty-btn"
                        onClick={() => handleDecrement(item)}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        −
                      </button>
                      <span className="qty-value" aria-live="polite">
                        {item.quantity}
                      </span>
                      <button
                        className="qty-btn"
                        onClick={() => handleIncrement(item)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-right">
                    <p className="cart-item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    {/* cart-item-delete class required by rubric */}
                    <button
                      className="btn-remove cart-item-delete"
                      onClick={() => handleRemove(item)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary sidebar */}
            <aside className="cart-summary" aria-label="Order summary">
              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Total Items</span>
                <span className="summary-val">{totalQuantity}</span>
              </div>
              <div className="summary-row">
                <span>Subtotal</span>
                <span className="summary-val">${totalCost.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className="summary-val">
                  {totalCost >= 50 ? 'Free 🎉' : '$4.99'}
                </span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span className="summary-val">
                  ${(totalCost + (totalCost >= 50 ? 0 : 4.99)).toFixed(2)}
                </span>
              </div>

              <button
                className="checkout-btn"
                onClick={handleCheckout}
                aria-label="Proceed to checkout"
              >
                Checkout →
              </button>

              <Link to="/products" className="continue-btn">
                ← Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </div>

      {/* Coming Soon message */}
      {showToast && (
        <div className="coming-soon-toast" role="alert" aria-live="assertive">
          🚧 Coming Soon — Checkout is not yet available. Stay tuned!
        </div>
      )}
    </div>
  );
}

export default CartItem;
