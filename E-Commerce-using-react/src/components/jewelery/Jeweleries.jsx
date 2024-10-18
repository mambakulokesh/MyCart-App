import "./Jeweleries.css";
import { jeweleryService } from "../services/jewelery/jeweleryService";
import { useState, useEffect } from "react";
import Jewelery from "./Jewelery";

function Jeweleries() {
    let [jewelerypro, setJewelerypro] = useState([]);

    useEffect(()=>{
      getJewelery();
    }, []);

    const getJewelery = ()=>{
        jeweleryService().then((res)=>{
            console.log(res.data);
            setJewelerypro(res.data);
        })
        .catch((error)=>{
            console.log(error)
            alert("somthing Went Wrong");
        })
    }
  return (
    <div className="jeweleryContainer">
      <h1>Jewelery</h1>

      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide my-3"
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

      <p className="mt-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        aspernatur obcaecati possimus consectetur vero quaerat optio sequi
        dolorum praesentium, alias nesciunt, aperiam sit. Inventore incidunt
        animi quasi dolores quas magnam provident illum nam voluptatibus,
        doloribus facilis molestiae quibusdam soluta tenetur molestias fugit
        mollitia nesciunt dignissimos iusto! Fugiat, nisi minima placeat cumque
        non quos a aspernatur, ducimus nobis aut quidem obcaecati quae aliquam
        cum nostrum alias, totam esse unde vel? Et culpa cum iusto cupiditate
        consectetur nemo distinctio saepe ex reprehenderit! Voluptas fugiat
        totam ea similique excepturi cupiditate eum. Assumenda quae dolor
        veritatis, tenetur reiciendis omnis rerum reprehenderit mollitia iusto
        harum.
      </p>
      {/* <button onClick={getJewelery} className="btn btn-outline-primary">
        getJewelery
      </button> */}

      {jewelerypro.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-evenly gap-3 mt-4">
          {jewelerypro.map((jeweleryItems, index) => {
            return <Jewelery key={index} jeweleryItems={jeweleryItems} />;
          })}
        </div>
      ) : (
        <h3 style={{ textAlign: "center", marginTop: "50px", color: "grey" }}>
          No Jewelery Data
        </h3>
      )}
    </div>
  );
}

export default Jeweleries;
