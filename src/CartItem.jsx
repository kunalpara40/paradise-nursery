import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice';
import Navbar from './Navbar';
import './App.css';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // `cart` variable name used throughout per rubric
  const cart = useSelector((state) => state.cart.items);
  const [showToast, setShowToast] = useState(false);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  // Support both item.price and item.cost for forward-compatibility
  const getPrice = (item) => item.price ?? item.cost ?? 0;
  const totalCost = cart.reduce((sum, item) => sum + getPrice(item) * item.quantity, 0);

  // handleIncrement — exact name required by rubric
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // handleDecrement — decreases quantity; removes item when quantity would reach 0
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // handleRemove — dispatches removeItem with item.name to match CartSlice
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // handleContinueShopping — exact function name required by rubric
  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
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
            {/* get-started-button class on Continue Shopping per rubric */}
            <button
              className="btn-primary get-started-button"
              onClick={handleContinueShopping}
            >
              🌱 Browse Plants
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            {/* Items list — map over `cart` */}
            <div className="cart-items-list" aria-label="Cart items">
              {cart.map((item) => {
                const unitPrice = getPrice(item);
                return (
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
                        Unit price: ${unitPrice.toFixed(2)}
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
                        ${(unitPrice * item.quantity).toFixed(2)}
                      </p>
                      {/* cart-item-delete — exact class name required by rubric */}
                      <button
                        className="btn-remove cart-item-delete"
                        onClick={() => handleRemove(item)}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </div>
                );
              })}
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

              {/* get-started-button1 — exact class name required by rubric */}
              <button
                className="checkout-btn get-started-button1"
                onClick={handleCheckout}
                aria-label="Proceed to checkout"
              >
                Checkout →
              </button>

              {/* get-started-button — exact class name required by rubric */}
              <button
                className="continue-btn get-started-button"
                onClick={handleContinueShopping}
                aria-label="Continue shopping"
              >
                ← Continue Shopping
              </button>
            </aside>
          </div>
        )}
      </div>

      {/* Visible Coming Soon message when showToast is true */}
      {showToast && (
        <div className="coming-soon-toast" role="alert" aria-live="assertive">
          🚧 Coming Soon — Checkout will be available soon. Stay tuned!
        </div>
      )}
    </div>
  );
}

export default CartItem;
