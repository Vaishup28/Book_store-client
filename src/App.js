import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";

import Home from "./Pages/Home";
import Book from "./Pages/Book";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
// import Results from "./Pages/result";
import Footer from "./Components/Footer";
import BookDetails from "./Pages/BookDetails";
import Navbar from "./Components/Navbar";
import Mystery from "./Pages/Mystery";
import HindiColl from "./Components/HindiColl";
import Bundle from "./Components/Bundle";
import Candle from "./Components/Candle";
import Monsoon from "./Components/Monsoon";
import Kids from "./Components/Kids";
import Offers from "./Components/Offers";
import HinDetails from "./Components/HinDetails";
import KidsDetails from "./Components/KidsDetails";
import BundleDetails from "./Components/BundleDetails";
import MonsoonDetails from "./Components/MonsoonDetails";
import CandleDetails from "./Components/CandleDetails";
import OfferDetails from "./Components/OfferDetails";
import CartData from "./Components/CartData";


const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar/>
        <CartProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/book/:_id" element={<BookDetails/>}/>
       <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />    
        {/* <Route path="/book/cityResponse/:city" element={<Results/>}/>
        <Route path="/book/bookType/:booktype" element={<Results/>}/> */}
        <Route path="/Mys/:id" element={<Mystery />} />
        <Route path="/coll" element={<HindiColl/>}/>
        <Route path="/bundleColl" element={<Bundle/>}/>
        <Route path="/bundleColl/:_id" element={<BundleDetails/>}/>
        <Route path="/candleColl" element={<Candle/>}/>
        <Route path="/candleColl/:_id" element={<CandleDetails/>}/>
        <Route path="/monColl" element={<Monsoon/>}/>
        <Route path="/kidsColl" element={<Kids/>}/>
        <Route path="/off" element={<Offers/>}/>
        <Route path="/coll/:_id" element={<HinDetails/>} />
        <Route path="/kidsColl/:_id" element={<KidsDetails/>} />
        <Route path="/bundleColl/:id" element={<BundleDetails/>}/>
        <Route path="/monColl/:_id" element={<MonsoonDetails/>}/>
        <Route path="/candleColl/:id" element={<CandleDetails/>}/>
        <Route path="/off/:_id" element={<OfferDetails/>}/>
        <Route path="/save" element={<CartData/>}/>
      </Routes>
       </CartProvider>
       <Footer/> 
      </AuthProvider>
    </Router>
  );
};

export default App;
