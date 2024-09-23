import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from './components/home/Home';
import Electronics from './components/electronics/Electronics';
import Jeweleries from './components/jewelery/Jeweleries';
import Mens from './components/mensc/Mens';
import Womens from './components/womensc/Womens';
import ProductDetails from './components/productDetails/ProductDetails';
import Profile from './components/profile/Profile';
import Personal from './components/user-deatils/Personal';
import Professional from './components/user-deatils/Professional';
import Educational from './components/user-deatils/Educational';

import PageNotFound from './components/pagenotfound/PageNotFound';

import {Route, Routes} from "react-router-dom";

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
          <Route path={"personaldetails"} element={<Personal />} />
          <Route path={"professionaldetails"} element={<Professional />} />
          <Route path={"educationaldetails"} element={<Educational />} />
        </Route>

        <Route path={"/productdetails/:id"} element={<ProductDetails />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    
   </div>
  )
}

export default App
