import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 
import axios from "axios";
import Header from "./components/ui/Header";
import ProductList from "./components/product/ProductList";
import ProductDetails from "./components/product/ProductDetails";
import { ProductProvider } from "./Context/ProductsContext";
import Home from "./components/Home";
import Checkout from "./components/checkout/Checkout";
import Details from "./components/checkout/Details";
import Shipping from "./components/checkout/Shipping";
import Payment from "./components/checkout/Payment";
import Footer from "./components/ui/Footer";
import NotFound from "./components/utils/NotFound";
import TrackOrder from "./components/checkout/TrackOrder";

function App() {
  const [bagToggle, setBagToggle] = useState(false);
  const [toggleCross, setToggleCross] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const { pathname, hash } = useLocation();
  

  useEffect(() => {
    axios.get("https://mimi-client.onrender.com/");
  }, []);

  
  useEffect(() => {

    if(hash === '#faq'){
      return
    } else{
       window.scrollTo(0, 0);
    }   
  }, [pathname]);


  const haddleToggle = () => {
    //if the burger menu is open close it and the open the bag
    if (toggleCross) {
      setToggleCross(false);
    }
    const current = !bagToggle;
    setBagToggle(current);
  };

  const toggleHandle = () => {
    //if the bag is open close it and the open the burger menu
    if (bagToggle) {
      setBagToggle(false);
    }
    const current = !toggleCross;
    setToggleCross(current);
  };

  return (
    <div className="relative">
      <ProductProvider>
        <Header
          toggle={haddleToggle}
          setIsCheckout={setIsCheckout}
          isCheckout={isCheckout}
          toggleCross={toggleCross}
          toggleHandle={toggleHandle}
          bagToggle={bagToggle}
        />

        <Routes>
          <Route path="/" element={<Home setIsCheckout={setIsCheckout} />} />
          <Route path="/products" element={<ProductList />} />
          <Route path={`/products/:id`} element={<ProductDetails />} />

          <Route
            path="/checkout"
            element={<Checkout setIsCheckout={setIsCheckout} />}
          >
            <Route index element={<Details />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="payment" element={<Payment />} />
          </Route>
          <Route path="/order-status" element={<TrackOrder />} />
          <Route path="checkout/payment/return" element={<h1>Welcome</h1>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ProductProvider>
      {!isCheckout ? <Footer /> : null}
    </div>
  );
}

export default App;
