import { useState, useEffect } from "react";
import axios from "axios";

function Cart() {
  let [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    getCartData();
  }, [])

  const getCartData = ()=>{
    axios.get("http://localhost:3000/addToCart").then((res)=>{
      setCartItems(res.data);
    }).catch(()=>{
      alert("Failed to get Data")
    });
  }

  const removeCartItem = (id)=>{
    axios.delete(`http://localhost:3000/addToCart/${id}`).then(()=>{
      alert("Item is removed from Cart");
      getCartData();
    }).catch(()=>{
      alert("Failed to remove cart item");
    });
  }

  return (
    <div className="container">
      <div className="row">
        <h5 className="text-center text-success mt-4 fs-3"> Cart Products</h5>
      </div>
      {
        cartItems.length > 0 ? 

        cartItems.map((product, index)=>{
          return <div key={index} className="row shadow p-3 my-5 w-75 d-flex justify-content-evenly align-items-center">
                  <div className="col-2">
                    <img src={product.image} alt="" width={"70px"} height={"70px"} />
                  </div>
                  <div className="col-2">
                    <p>{product.title}</p>
                  </div>
                  <div className="col-2">
                    <p>$ {product.price}</p>
                  </div>
                  <div className="col-2">
                    <p>{product.category}</p>
                  </div>
                  <div className="col-2">
                    <button className="btn btn-danger" onClick={()=>{
                      removeCartItem(product.id)
                    }}>Remove</button>
                  </div>
          </div>
        }) : 

        <h2 className="text-center text-danger mt-5">No Products are added in Cart</h2>
      }

    </div>
  );
}

export default Cart;
