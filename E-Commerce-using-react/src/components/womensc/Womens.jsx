import "./Womens.css";
import { womensFashion } from "../services/womens/WomensFashion";
import { useState, useEffect } from "react";
import WomensProducts from "./WomensProducts";

function Womens() {

  const [womensProducts, setWomensProducts] = useState([]);

  useEffect(()=>{
    getWomensFashion();
  }, []);
  
  const getWomensFashion = ()=>{
    womensFashion()
    .then((res)=>{
      console.log(res.data);
      setWomensProducts(res.data);
    })
    .catch((error)=>{
      console.log(error);
      alert("Something Went Wrong");
    })
  }

  return (
    <div className="womensContainer">
      <h1>Womens Fashion</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit hic ab
        obcaecati, nemo in dicta ipsa atque quis aspernatur quasi nihil, ratione
        magni quos corporis optio vitae soluta similique non numquam doloremque
        fugiat reiciendis. Fugiat consectetur porro, atque, debitis facilis quo
        sunt ullam, aut vero eius iste doloribus ratione quam quaerat eveniet
        recusandae reiciendis assumenda aliquid quia maxime exercitationem
        aliquam reprehenderit! Temporibus in doloribus, debitis dolore fugit
        nisi? Laboriosam, distinctio nemo id suscipit, cupiditate, sed officia
        facere nesciunt perferendis quam maxime! Id, ex ut vel corporis nobis
        voluptas necessitatibus non illum, voluptatem maiores consequatur autem
        enim, obcaecati porro voluptate veniam.
      </p>
      {/* <button onClick={getWomensFashion} className="btn btn-outline-primary">getWomensFashion</button> */}

      <div className="d-flex flex-wrap justify-content-evenly gap-2 mt-4">
        {
          womensProducts.map((womensItems)=>{
            return <WomensProducts womensItems={womensItems} />
          })
        }
      </div>

    </div>
  );
}

export default Womens;
