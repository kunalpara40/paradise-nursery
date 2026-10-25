import { Link } from 'react-router-dom';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-badge">🌿 Premium Indoor Plants</div>

        <h1 className="landing-title">
          Welcome to <span>Paradise</span> Nursery
        </h1>

        <p className="landing-subtitle">
          Discover our curated collection of beautiful houseplants. Transform your
          home or office into a thriving green sanctuary with plants handpicked
          for quality and longevity.
        </p>

        <div className="landing-actions">
          <Link to="/products" className="btn-primary">
            🌱 Get Started
          </Link>
          <Link to="/about" className="btn-outline">
            About Us
          </Link>
        </div>

        <div className="landing-features">
          <div className="feature-chip">
            <span className="chip-icon">🚚</span> Free Shipping over $50
          </div>
          <div className="feature-chip">
            <span className="chip-icon">🌡️</span> Care Guides Included
          </div>
          <div className="feature-chip">
            <span className="chip-icon">💚</span> 100% Healthy Plants
          </div>
          <div className="feature-chip">
            <span className="chip-icon">♻️</span> Eco-Friendly Packaging
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
