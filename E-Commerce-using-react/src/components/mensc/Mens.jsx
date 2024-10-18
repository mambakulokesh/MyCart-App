import "./Mens.css";
import { mensFashion } from "../services/mens/MensFashion";
import { useEffect, useState } from "react";
import MensProducts from "./MensProducts";

function Mens() {

    let [mensProducts, setMensProducts] = useState([]);

    useEffect(()=>{
      getMensFashion();
    }, []);

    const getMensFashion = ()=>{
        mensFashion().then((res)=>{
            console.log(res.data);
            setMensProducts(res.data);

        })
        .catch((error)=>{
            console.log(error);
            alert("Something Went Wrong");
        })

    }
  return (
    <div className="MensContainer">
      <h1>Mens</h1>

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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
        consequuntur ab mollitia recusandae adipisci sed nobis tempore est enim
        harum, delectus aspernatur earum? Magnam ratione molestiae atque
        dolorem! Cum culpa voluptate doloremque unde molestias quidem, quibusdam
        minus pariatur neque, mollitia explicabo illum modi numquam ipsum ut
        obcaecati consequuntur ipsam? Cupiditate vitae recusandae harum qui
        labore. Nesciunt perspiciatis, sunt nisi iste mollitia aliquam vero
        aspernatur quam odit voluptas cumque ab consequuntur consectetur itaque
        dolorem. A illo sit repudiandae, cumque dignissimos perferendis
        inventore tenetur pariatur qui ea, sed accusamus cupiditate distinctio
        accusantium eligendi maxime aliquam? Dolorem quidem quod, omnis ratione
        tempora nemo!
      </p>
      {/* <button onClick={getMensFashion} className="btn btn-outline-primary">getMensFashion</button> */}

      <div className="d-flex flex-wrap justify-content-evenly gap-3 mt-4">
        {mensProducts.map((mensItems) => {
          return <MensProducts mensItems={mensItems} />;
        })}
      </div>
    </div>
  );
}

export default Mens;
