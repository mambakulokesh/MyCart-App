import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="row1">
          <h3>GET IN TOUCH</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            suscipit animi ipsa porro earum nisi quidem cum aut, iure nihil!
          </p>
          <p>
            <i className="bi bi-geo-alt-fill"></i> 123 street, New York, USA
          </p>
          <p>
            <i className="bi bi-envelope"></i> info@example.com
          </p>
          <p>
            <i className="bi bi-telephone-fill"></i> +012 83764354242
          </p>
        </div>

        <div className="row2">
          <h3>QUICK SHOP</h3>
          <p>&gt; Home</p>
          <p>&gt; Our Shop</p>
          <p>&gt; Shop Details</p>
          <p>&gt; Shopping Cart</p>
          <p>&gt; Checkout</p>
          <p>&gt; Contact Us</p>
        </div>

        <div className="row3">
          <h3>MY ACCOUNT</h3>
          <p>&gt; Home</p>
          <p>&gt; Our Shop</p>
          <p>&gt; Shop Details</p>
          <p>&gt; Shopping Cart</p>
          <p>&gt; Checkout</p>
          <p>&gt; Contact Us</p>
        </div>

        <div className="row4">
          <h3>NEWSLETTER</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            necessitatibus, dicta eum optio perferendis tempore.
          </p>
          <div className="form">
            <input type="email" placeholder="Enter your email" />
            <button>Sign Up</button>
          </div>
          <h4>FOLLOW US</h4>
          <div className="socials">
            <a href="">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="">
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
