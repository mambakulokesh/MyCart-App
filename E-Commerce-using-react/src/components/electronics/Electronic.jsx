import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Electronic({ product }) {
    const [addInCart, setAddInCart] = useState(false);
    const {image, title, price, rating, id} = product;



    const addToCart = ()=>{
      axios.post("http://localhost:3000/addToCart", product).then(()=>{
        alert("product is added to Cart")
        setAddInCart(true);
      }).catch(()=>{
        alert("Product already in cart");
      });
      
    }

  return (
    <div className="card w-25 m-4">
      <div className="card-header">
        <img src={image} alt="" width="100%" height={"200px"} />
      </div>
      <div className="card-body">
        <h5>{title}</h5>
        <p>$ {price}</p>
        <p>&#9733; &#9733; &#9733; &#9733; &#9733; {rating.rate}</p>
        <Link to={`/productdetails/${id}`}>
          <button className="btn btn-outline-primary mx-2">
            Product Details
          </button>
        </Link>
        {addInCart ? (
          <button className="btn btn-outline-danger mx-1">Remove</button>
        ) : (
          <button className="btn btn-outline-warning mx-2" onClick={addToCart}>
            Add to Cart
          </button>
        )}
        <button className="btn btn-outline-danger mx-2 py-1 px-2" style={{fontSize : "15px"}}>
          <i className="bi bi-heart p-0 m-0"></i>
        </button>
      </div>
    </div>
  );
}

export default Electronic
