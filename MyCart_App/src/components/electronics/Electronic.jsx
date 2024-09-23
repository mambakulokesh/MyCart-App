import { useState } from "react";
import { Link } from "react-router-dom";

function Electronic({ product }) {
    const [addInCart, setAddInCart] = useState(true);
    const {image, title, price, rating, id} = product;

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
          <button className="btn btn-outline-primary mx-1">Product Details</button>
        </Link>
       {
        addInCart ? <button className="btn btn-outline-warning mx-1">Add to Cart</button> :
          <button className="btn btn-outline-danger mx-1">Remove</button>
       }
      </div>
    </div>
  );
}

export default Electronic
