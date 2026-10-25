import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" aria-label="Paradise Nursery Home">
          <span className="brand-icon">🌿</span>
          <span className="brand-name">Paradise Nursery</span>
        </Link>

        <ul className="navbar-links" role="list">
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Plants</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="cart-link" aria-label={`Shopping cart with ${totalCount} items`}>
              🛒 Cart
              {totalCount > 0 && (
                <span className="cart-badge" aria-hidden="true">{totalCount}</span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
