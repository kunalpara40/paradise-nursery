import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice';
import Navbar from './Navbar';
import './App.css';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showToast, setShowToast] = useState(false);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  const handleImgError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=200&q=60';
  };

  return (
    <div className="cart-page">
      <Navbar />

      <div className="cart-container">
        <h1 className="cart-title">🛒 Shopping Cart</h1>

        {cartItems.length === 0 ? (
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
            {/* Items list */}
            <div className="cart-items-list" aria-label="Cart items">
              {cartItems.map((item) => (
                <div className="cart-item-card" key={item.id} role="article" aria-label={item.name}>
                  <img
                    className="cart-item-img"
                    src={item.image}
                    alt={item.name}
                    onError={handleImgError}
                  />

                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-unit-price">Unit price: ${item.price.toFixed(2)}</p>

                    <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
                      <button
                        className="qty-btn"
                        onClick={() => handleDecrease(item)}
                        disabled={item.quantity <= 1}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        −
                      </button>
                      <span className="qty-value" aria-live="polite">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => handleIncrease(item)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-right">
                    <p className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      className="btn-remove"
                      onClick={() => handleRemove(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      🗑 Remove
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
                <span className="summary-val">{totalCost >= 50 ? 'Free 🎉' : '$4.99'}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span className="summary-val">
                  ${(totalCost + (totalCost >= 50 ? 0 : 4.99)).toFixed(2)}
                </span>
              </div>

              <button className="checkout-btn" onClick={handleCheckout} aria-label="Proceed to checkout">
                Checkout →
              </button>

              <Link to="/products" className="continue-btn">
                ← Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </div>

      {showToast && (
        <div className="coming-soon-toast" role="alert" aria-live="assertive">
          🚧 Checkout Coming Soon! We're working on it. Stay tuned!
        </div>
      )}
    </div>
  );
}

export default CartItem;
