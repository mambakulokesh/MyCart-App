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
        {
            mensProducts.map((mensItems)=>{
                return <MensProducts mensItems = {mensItems} />
            })
        }
      </div>


    </div>
  );
}

export default Mens;