import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const products = [
    {
      name: "Samsung Galaxy S24",
      price: "₹74,999",
      oldPrice: "₹89,999",
      offer: "17% off",
      rating: 5,
      image: "https://media.ldlc.com/r1600/ld/products/00/06/11/36/LD0006113654.jpg",
    },
    {
      name: "Sony WH-1000XM5 Headphones",
      price: "₹24,990",
      oldPrice: "₹34,990",
      offer: "29% off",
      rating: 5,
      image: "https://cdn.ecoustics.com/db0/wblob/17BA35E873D594/2B9B/4318D/6fnX8JRqvGWJWO4Ya8pLdTyqiqklo9-Y4MQaiHDjEMI/sony-wh-1000xm4-1000xm5-compared-black.jpg",
    },
    {
      name: "Nike Air Max Shoes",
      price: "₹7,495",
      oldPrice: "₹12,995",
      offer: "42% off",
      rating: 4,
      image: "https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw34b8f1ec/nk/0fd/1/4/8/7/b/0fd1487b_306c_4b70_a96a_cd6ac99e7d61.png?sw=2000&sh=2000&sm=fit",
    },
    {
      name: "Prestige Air Fryer 5L",
      price: "₹3,499",
      oldPrice: "₹6,500",
      offer: "46% off",
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71bPgfhbH-L._AC_.jpg",
    },
    {
      name: "Kindle Paperwhite",
      price: "₹14,999",
      oldPrice: "₹18,999",
      offer: "21% off",
      rating: 5,
      image: "https://tse4.mm.bing.net/th/id/OIP.sTUIjNNqZxgmCmIms-RLLQHaHi?pid=Api&P=0&h=180",
    },
    {
      name: "Levi's Men's Jeans",
      price: "₹1,799",
      oldPrice: "₹3,499",
      offer: "49% off",
      rating: 4,
      image: "https://lsco.scene7.com/is/image/lsco/005013737-front-pdp-ld?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=2000&hei=2500",
    },
      {
      name: "Boat Earbuds",
      price: "₹1,299",
      oldPrice: "₹2,999",
      offer: "57% off",
      rating: 5,
      image:
        "https://m.media-amazon.com/images/I/61KNJav3S9L._SX679_.jpg",
    },

    {
      name: "Iphone 15",
      price: "₹69,900",
      oldPrice: "₹79,999",
      offer: "12% off",
      rating: 5,
      image:
        "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
    },

    {
      name: "Smart Watch",
      price: "₹2,499",
      oldPrice: "₹4,999",
      offer: "50% off",
      rating: 5,
      image:
        "https://m.media-amazon.com/images/I/61ZjlBOp+rL._SX679_.jpg",
    },

    {
      name: "4K Smart TV",
      price: "₹41,990",
      oldPrice: "₹64,999",
      offer: "35% off",
      rating: 5,
      image:
        "https://m.media-amazon.com/images/I/71CCbu6PLmL._AC_.jpg",
    },

    {
      name: "HP Laptop",
      price: "₹45,990",
      oldPrice: "₹59,999",
      offer: "23% off",
      rating: 5,
      image:
        "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg",
    },

    {
      name: "Wireless Mouse",
      price: "₹599",
      oldPrice: "₹995",
      offer: "40% off",
      rating: 5,
      image:
        "https://m.media-amazon.com/images/I/61LtuGzXeaL._SX679_.jpg",
    },
  ];

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <div className="logo">Amazon</div>

        <input
          type="text"
          placeholder="Search Amazon"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="nav">
          <p>Hello, Sign in</p>
          <h4>Account & Lists</h4>
        </div>

        <div className="cart">
          🛒 Cart
          
          {cart.length > 0 && (
           <button className="cart-btn">{cart.length}</button>
          )}
        </div>
      </div>

      {/* Menu */}
      <div className="menu">
        <p>All</p>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>

      {/* Hero Banner */}
      <div className="hero">
        <div className="hero-text">
          <h1>Samsung Galaxy S24</h1>
          <h2>AI-Powered Flagship Phone</h2>
          <h1>₹74,999</h1>

          <button>Shop now</button>
        </div>
      </div>

    
      {/* Categories */}
      <div className="categories">
        <div className="category-card">
          <h2>Styles for men</h2>
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
            alt="Men Fashion"
          />
          <p>See all offers</p>
        </div>

        <div className="category-card">
          <h2>Home & kitchen</h2>
          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba"
            alt="Home Kitchen"
          />
          <p>See all offers</p>
        </div>

        <div className="category-card">
          <h2>Electronics</h2>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Electronics"
          />
          <p>See all offers</p>
        </div>

        <div className="category-card">
          <h2>Sign in</h2>
          <button className="signin-btn">Sign in securely</button>
        </div>
      </div>

      {/* Products */}
      <div className="product-section">
        <h2>Best sellers in Electronics</h2>

        <div className="products">
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <div className="product-card" key={index}>
                <img src={item.image} alt={item.name} />

                <h3>{item.name}</h3>

                <div className="rating">
                  {"⭐".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
                </div>

                <h2>{item.price}</h2>

                <p>
                  <span className="old-price">{item.oldPrice}</span>
                  <span className="offer">{item.offer}</span>
                </p>

                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="no-result">🔍 No results for "{search}"</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div>
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
        </div>

        <div>
          <h3>Make Money with Us</h3>
          <p>Sell on Amazon</p>
          <p>Amazon Global Selling</p>
        </div>

        <div>
          <h3>Let Us Help You</h3>
          <p>Your Account</p>
          <p>Returns Centre</p>
        </div>

        <div>
          <h3>Connect with Us</h3>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>YouTube</p>
        </div>
      </div>
    </div>
  );
}

export default App;