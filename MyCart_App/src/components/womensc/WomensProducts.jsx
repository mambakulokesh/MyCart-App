import { Link } from "react-router-dom";

function WomensProducts( { womensItems } ) {
    let {image, title, price, rating, id} = womensItems;
  return (
    <div className="card w-25 m-4">
      <div className="card-header">
        <img src={image} alt="" width="100%" height={"200px"} />
      </div>
      <div className="card-body">
        <h5>{title}</h5>
        <p>$ {price}</p>
        <p>{rating.rate}</p>
        <Link to={`/productdetails/${id}`}>
          <button className="btn btn-outline-primary">
            Product Details
          </button>
        </Link>
        <Link to="">
          <button className="btn btn-outline-warning ">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WomensProducts
