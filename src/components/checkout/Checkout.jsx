import React from "react";
import useProduct from "../../hooks/useProduct";
import { Outlet, useLocation } from "react-router-dom";

const Checkout = (props) => {
  const { bag, bagTotal } = useProduct();
  const here = useLocation().pathname;
  props.setIsCheckout(true);
  const size = window.screen;

  return (
    <div className="grid w-screen md:w-full place-content-center content-center md:grid-cols-2 md:grid-row-2">
      <details
        open={size.width > 785}
        className="md:col-start-2 md:row-start-2 px-4 bg-slate-200 md:bg-white py-2 md:border-l-2 md:border-l-gray-400"
      >
        <summary className="grid grid-cols-5 grid-rows-1">
          <span className="col-start-1 col-span-4">Order Summary</span>
          <span className="col-start-5">R {bagTotal}</span>
        </summary>
        {bag.map((item) => (
          <div className="grid grid-cols-4 py-1">
            <img
              className="w-20 rounded-lg border-2 "
              src={item.imageUrl}
              alt="plant item"
            />
            <span className="grid grid-cols-2 col-start-2 col-span-4 mx-4">
              <p>{item.name}</p>
              <p className="text-right">{item.price * item.quantity}</p>
            </span>
          </div>
        ))}
      </details>
      <nav className="px-4  text-sm md:text-lg italic pt-1 md:col-start-1 md:row-start-1 mt-2 md:mb-4">
        <span
          className={`mr-2 ${
            here === "/checkout" ? "font-bold underline " : "text-black"
          }`}
        >
          Details
        </span>{" "}
        <span className="text-sm">{">"}</span>
        <span
          className={`mx-2 ${
            here === "/checkout/shipping" ? "font-bold underline" : "text-black"
          }`}
        >
          Shipping
        </span>{" "}
        <span className="text-sm">{">"}</span>
        <span
          className={`mx-2 ${
            here === "/checkout/payment" ? "font-bold underline" : "text-black"
          }`}
        >
          Payment
        </span>
      </nav>
      <h1 className="text-center italic text-white">.</h1>

      <Outlet />
    </div>
  );
};

export default Checkout;
