import { useState } from "react";
import { Burger, Cross, BagIcon } from "./Icons";
import { Link, useLocation } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import BarsOverlay from "./BarsOverlay";
import Menu from "./Menu";
import SideBar from "./SideBar";

const Header = (props) => {
  const checkout = useLocation().pathname.includes("checkout");

  const { toggleCross, toggleHandle, bagToggle, toggle } = props;
  const { bag } = useProduct();

  const closeBars = () => {
    props.setIsCheckout(false);
    if (bagToggle) {
      props.toggle();
    }

    if (toggleCross) {
      toggleHandle();
    }
  };

  return (
    <>
      {checkout ? (
        <header className="bg-black sticky top-0">
          <Link
            to="/"
            className="block self-center text-white text-center py-2 text-xl font-bold"
            onClick={closeBars}
          >
            Evergreen Pasture
          </Link>
        </header>
      ) : (
        <header className="shadow-lg h-16 flex justify-between px-4 sticky top-0 bg-white md:px-12 z-50">
          {toggleCross ? (
            <button onClick={toggleHandle}>
              <Cross />{" "}
            </button>
          ) : (
            <button className="md:hidden block" onClick={toggleHandle}>
              <Burger />
            </button>
          )}

          <Link
            to="/"
            className="block self-center text-xl font-bold"
            onClick={closeBars}
          >
            Evergreen Pasture
          </Link>
          <nav className="hidden md:flex md:justify-self-center md:self-center md:gap-8 text-xl font-bold">
            <Link
              to="/products"
              className="block focus:text-slate-500 hover:text-slate-500"
            >
              Shop
            </Link>
            <Link
              to="/track-order"
              className="block focus:text-slate-500 hover:text-slate-500"
            >
              Track Order
            </Link>
            <Link
              to="/ebook"
              className="block focus:text-slate-500 hover:text-slate-500"
            >
              Ebook
            </Link>
            <a
              href="/#faq"
              className="block focus:text-slate-500 hover:text-slate-500"
            >
              FAQ
            </a>
          </nav>
          <article className="self-center flex relative">
            <button onClick={props.toggle}>
              <BagIcon />
            </button>
            {bag.length > 0 ? (
              <span className="absolute -top-4 -right-2 md:-right-3 text-right">
                {bag.length}
              </span>
            ) : null}
          </article>
        </header>
      )}

      {toggleCross ? <Menu toggle={toggleHandle} /> : null}
      {bagToggle ? <SideBar toggle={toggle} /> : null}
    </>
  );
};

export default Header;
