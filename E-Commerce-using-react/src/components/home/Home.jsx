import "./Home.css";
import { categoriesData } from "../data/CategoryData";

function Home() {
  return (
    <div className="HomeContainer">


      <div className="container d-flex text-center">
        {
          categoriesData.map((item, index)=>{
            return <div key={index} className="container-fluid">
              <img src={item.image} alt="" width={"75px"} height={"75px"}/>
              <h6>{item.title}</h6>
            </div>

          })
        }

      </div>



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

      

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam labore
        consectetur quod amet facere ea eligendi suscipit omnis recusandae?
        Quisquam eum voluptas dolorum, perferendis voluptatum incidunt ad
        tempore labore expedita repellat maiores odio soluta nisi aperiam animi
        alias laudantium corporis cum doloremque sequi impedit ullam debitis
        optio! Obcaecati repellat harum aliquid inventore officia exercitationem
        numquam nobis minus molestiae soluta, delectus, voluptas, aspernatur ex
        magnam. Nobis, rem. Labore accusantium esse quos officiis, animi modi
        necessitatibus facere autem eos iure, perspiciatis et, ullam eum quam
        amet. Ab ipsam animi fugit blanditiis, voluptates, dolores sed quis
        adipisci nobis dolor consectetur, totam ipsum veritatis.
      </p>
    </div>
  );
}

export default Home;
