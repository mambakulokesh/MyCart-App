import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">My-Store</Link>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
      </div>

      <div className="features">
        <Link to="/profile">
          <i className="bi bi-person-circle"></i>
        </Link>
        <Link to="/cart">
          <i className="bi bi-bag-check-fill"></i>
        </Link>
        <Link to="/wishlist">
          <i className="bi bi-heart-fill"></i>
        </Link>
        <button className="btn btn-outline-info">Logoin</button>
      </div>
    </div>
  );
}

export default Navbar;
