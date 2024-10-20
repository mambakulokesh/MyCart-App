import "./Electronics.css";
import { electronicsService } from "../services/electronics/electronicService";
import { useState, useEffect } from "react";
import Electronic from "./Electronic";

function Electronics() {
  let [electronicProducts, setElectronicProducts] = useState([]);

  useEffect(() => {
    getElectronicData();
  }, []);

  const getElectronicData = () => {
    electronicsService()
      .then((res) => {
        console.log(res.data);
        setElectronicProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Something Went Wrong");
      });
  };

  return (
    <div className="electronicContainer">
      <h2>Electronics</h2>

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

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
        voluptatibus dolores. Repellendus molestias perspiciatis ullam fuga
        culpa placeat dolores in consequuntur facilis at tempore laboriosam
        porro natus nemo distinctio modi, repudiandae sint quasi voluptates rem
        praesentium. Sit distinctio voluptates quisquam fugiat a cupiditate qui
        animi quis similique? Quisquam tempora unde dolore vel perspiciatis!
        Corrupti sequi, quis obcaecati dolores architecto tempora id iste
        laboriosam reiciendis. Optio dignissimos tenetur sit, magnam animi aut
        voluptate officia! Ipsam, nisi maxime nesciunt, aliquam a quos fugiat
        iure magni assumenda error obcaecati, tenetur perspiciatis? Quis at quae
        odit reiciendis impedit vel quidem deserunt inventore incidunt quod?
      </p>
      {/* <button onClick={getElectronicData} className="btn btn-outline-primary">getElectronics</button> */}

      {electronicProducts.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-evenly gap-3 mt-4">
          {electronicProducts.map((product, index) => {
            return <Electronic key={index} product={product} />;
          })}
        </div>
      ) : (
        <h3 style={{ color: "red", textAlign: "center", marginTop: "50px" }}>
          No Electronics Data
        </h3>
      )}
    </div>
  );
}

export default Electronics;
