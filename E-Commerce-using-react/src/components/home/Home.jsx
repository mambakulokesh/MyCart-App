import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
// import { categoriesData } from "../data/CategoryData";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    const allProducts = fetch("http://localhost:3000/products");

    allProducts
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // console.log(res.data);
        setProducts(data);
      })
      .catch((error) => {
        alert("Something Went Wrong");
        console.log(error);
      });
  };

  return (
    <div className="HomeContainer">
      {/* <div className="container d-flex text-center">
        {categoriesData.map((item, index) => {
          return (
            <div key={index} className="container-fluid">
              <img src={item.image} alt="" width={"75px"} height={"75px"} />
              <h6>{item.title}</h6>
            </div>
          );
        })}
      </div> */}

      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide my-3 container"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ec29d9b3b0a537d1.jpg?q=20"
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1e31c9d65e3b4592.jpg?q=20"
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/df5fc1c522d37039.jpg?q=20"
              className="d-block w-100"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="text-center p-4">All Categories</h2>
        <div className="row d-flex flex-wrap justify-content-evenly gap-4">
          {products.map((prod, id) => {
            return (
              <div
                key={id}
                className="card shadow text-center"
                style={{ width: "22rem" }}
              >
                <img
                  src={prod.image}
                  className="card-img-top p-4"
                  alt="..."
                  width={"100%"}
                  height={"300px"}
                />
                <div className="card-body">
                  <h5 className="card-title">{prod.title}</h5>
                  <p className="card-text">$ {prod.price}</p>
                  <p className="card-text"> {prod.rating.rate} ⭐</p>

                  <Link
                    to={`/productdetails/${id}`}
                    className="btn btn-outline-dark m-2"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
