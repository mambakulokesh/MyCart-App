import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from './components/home/Home';
import Electronics from './components/electronics/Electronics';
import Jeweleries from './components/jewelery/Jeweleries';
import Mens from './components/mensc/Mens';
import Womens from './components/womensc/Womens';
import ProductDetails from './components/productDetails/ProductDetails';
import Profile from './components/profile/Profile';


import Cart from './components/cart/Cart';

import PageNotFound from './components/pagenotfound/PageNotFound';

import {Route, Routes} from "react-router-dom";
import Account from './components/user-deatils/Account';
import Address from './components/user-deatils/Address';
import Help from './components/user-deatils/Help';

function App() {

  return (
   <div>
      <Navbar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/electronics"} element={<Electronics />} />
        <Route path={"/jewelery"} element={<Jeweleries />} />
        <Route path={"/mens"} element={<Mens />} />
        <Route path={"/womens"} element={<Womens />} />

        <Route path={"/profile"} element={<Profile />}>
          <Route index path='' element={<Account />} />
          <Route path={"Account-details"} element={<Account />} />
          <Route path={"Address-details"} element={<Address />} />
          <Route path={"Help-center"} element={<Help />} />
        </Route>

        <Route path={"/cart"} element={<Cart />} />

        <Route path={"/productdetails/:id"} element={<ProductDetails />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    
   </div>
  )
}

export default App
