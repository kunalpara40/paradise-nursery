# Paradise Nursery Shopping Application

A complete, production-quality e-commerce web application built with **React + Vite** for the IBM Full Stack JavaScript Developer Coursera capstone project.

---

## 📌 Project Description

**Paradise Nursery** is an online houseplant shop that lets customers browse a curated catalogue of indoor plants, add them to a shopping cart, manage quantities, and proceed to checkout. It demonstrates core React and Redux Toolkit concepts in a polished, responsive botanical-themed UI.

---

## 🛠 Technologies Used

| Technology | Purpose |
|---|---|
| React 18 | UI component library |
| Vite | Development server & bundler |
| Redux Toolkit | Shopping cart state management |
| React Redux | Connecting React components to the Redux store |
| React Router DOM v6 | Client-side routing and navigation |
| CSS (Vanilla) | Responsive styling, animations, botanical design system |

---

## ✨ Main Features

- 🏠 **Landing Page** — Full-screen botanical background with welcoming copy and CTA.
- 🌿 **Product Catalogue** — 18 unique houseplants organised into **3 categories**:
  - Air-Purifying Plants
  - Low-Maintenance Plants
  - Succulents & Cacti
- 🛒 **Shopping Cart** — Powered by Redux; quantity controls, item totals, order summary.
- ➕ **Add to Cart** — Buttons disable after adding; cart badge updates immediately.
- 🔢 **Quantity Management** — Increase / decrease buttons (minimum 1); remove items.
- 💬 **Checkout Toast** — "Coming Soon" notification on checkout click.
- ℹ️ **About Us Page** — Mission, vision, plant benefits, and brand story.
- 📱 **Fully Responsive** — Mobile, tablet, and desktop layouts.
- ♿ **Accessible** — Semantic HTML, ARIA labels, keyboard-navigable.

---

## 📦 Installation & Setup

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install dependencies

```bash
npm install
```

---

## 🚀 Running the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗 Building for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
nursary/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx             ← Router and page routes (required)
│   ├── App.css             ← Full design system & all component styles (required)
│   ├── AboutUs.jsx         ← About Us page (required)
│   ├── CartItem.jsx        ← Shopping cart page (required)
│   ├── CartSlice.jsx       ← Redux cart slice (required)
│   ├── ProductList.jsx     ← Plant catalogue page (required)
│   ├── Navbar.jsx          ← Reusable navigation bar
│   ├── LandingPage.jsx     ← Landing / home page
│   ├── plantsData.js       ← 18-plant product data array
│   ├── store.js            ← Redux store configuration
│   ├── main.jsx            ← App entry point (Provider + Router)
│   └── index.css           ← Global CSS reset
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛍 Redux Shopping Cart

The cart is managed entirely through Redux Toolkit:

| Action | Description |
|---|---|
| `addItem(product)` | Adds a new product to the cart; ignores duplicates |
| `removeItem(id)` | Removes the item with the given product ID |
| `updateQuantity({ id, quantity })` | Sets quantity for a product; minimum quantity is 1 |

**State shape:**
```js
{
  cart: {
    items: [
      { id, name, category, price, image, description, quantity }
    ]
  }
}
```

Derived values (total count, total cost) are computed from `items` in components using `useSelector`—no stale cached totals.

---

## 🎓 Coursera Submission Notes

All 7 required files are present at their exact specified paths:

1. `README.md`
2. `src/AboutUs.jsx`
3. `src/App.css`
4. `src/App.jsx`
5. `src/CartSlice.jsx`
6. `src/ProductList.jsx`
7. `src/CartItem.jsx`

---

*Built with 💚 for the IBM Full Stack JavaScript Developer Coursera Capstone.*
