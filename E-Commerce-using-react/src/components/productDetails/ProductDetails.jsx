import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductDetails() {
  const [item, setItem] = useState({
    id: 0,
    image: "",
    description: "",
    price: 0,
    title: "",
    category: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Something Went Wrong");
      });
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6 p-4">
          <img src={item.image} alt="" width={"100%"} height={"500px"} />
        </div>
        <div className="col-6 p-4">
          <h3>{item.title}</h3>
          <p>{item.rating.rate}&#9733;</p>
          <p>
            <b className="fs-2">$ {item.price}</b> &nbsp; <s>₹19,890</s>
          </p>
          <p>
            No. of Available Products : <b>{item.rating.count}</b>
          </p>
          <p>{item.description}</p>
          <Link to="/cart" className="btn btn-warning me-5">
            Add to Cart
          </Link>
          <Link to="/" className="btn btn-secondary me-5">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
