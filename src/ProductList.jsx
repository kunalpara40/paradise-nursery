import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import Navbar from './Navbar';
import plants from './plantsData';
import './App.css';

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const isInCart = useSelector((state) =>
    state.cart.items.some((item) => item.id === plant.id)
  );

  const handleAdd = () => {
    dispatch(addItem(plant));
  };

  const handleImgError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=60';
  };

  return (
    <div className="plant-card" role="article" aria-label={plant.name}>
      <div className="plant-card-img-wrap">
        <img
          className="plant-card-img"
          src={plant.image}
          alt={`${plant.name} — ${plant.category}`}
          onError={handleImgError}
          loading="lazy"
        />
      </div>
      <div className="plant-card-body">
        <span className="plant-category-tag">{plant.category}</span>
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-desc">{plant.description}</p>
        <p className="plant-price">${plant.price.toFixed(2)}</p>
        <button
          className="btn-add-to-cart"
          onClick={handleAdd}
          disabled={isInCart}
          aria-label={isInCart ? `${plant.name} already in cart` : `Add ${plant.name} to cart`}
        >
          {isInCart ? '✅ Added to Cart' : '🛒 Add to Cart'}
        </button>
      </div>
    </div>
  );
}

function ProductList() {
  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div className="product-list-page">
      <Navbar />

      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Our Plant Collection</h1>
          <p>Handpicked houseplants for every home and lifestyle</p>
        </div>
      </div>

      <div className="products-container">
        {categories.map((category) => (
          <section className="category-section" key={category} aria-labelledby={`cat-${category}`}>
            <div className="category-heading">
              <h2 id={`cat-${category}`}>{category}</h2>
              <div className="category-line" aria-hidden="true" />
            </div>
            <div className="products-grid">
              {plants
                .filter((p) => p.category === category)
                .map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
