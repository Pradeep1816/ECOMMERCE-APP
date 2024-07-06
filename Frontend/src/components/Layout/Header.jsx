import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
function Header() {
  const [menuIcon, setMenuIcon] = useState(true);
  const closeIcon = () => {
    setMenuIcon(true);
  };
  const showIcon = () => {
    setMenuIcon(false);
  };
  return (
    <>
      <header
        className="flex sticky top-0
        justify-between items-center dark:bg-yellow-300 w-full z-10"
      >
        <NavLink to="/">
          <h2 className="ml-10 p-1 bg-stone-900 font-display font-bold uppercase text-white">
            Shoe Haven
          </h2>
        </NavLink>
        <nav className="pl-5 pr-5 hidden md:flex md:block">
          <ul className="flex items-center uppercase justify-center gap-8">
            <li className="group">
              <NavLink to="/">
                Home
                <div className="bg-amber-800 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </NavLink>
            </li>
            <li className="group">
              <NavLink to="/about">
                About
                <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </NavLink>
            </li>
            <li className="group">
              <NavLink to="/products">
                Products
                <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </NavLink>
            </li>
            <li className="group">
              <NavLink to="/contact">
                Contact
                <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </NavLink>
            </li>

            <li className="mx-5 hover:bg-yellow-400 p-2 rounded-xl hover:text-white">
              <NavLink className="">Login</NavLink>
            </li>
            <li className="group">
              <NavLink to="/cart" className="m-5 flex">
                <BsCart />
                <sub>0</sub>
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className=" p-5 md:hidden" onClick={() => showIcon()}>
          <IoMenu style={{ fontSize: "25px" }} />
        </button>
        {/* Mobile Navbar */}
        <div
          className={`fixed ${
            menuIcon && "hidden"
          } bg-white inset-0 items-center z-10 md:hidden`}
        >
          <div id="nav-bar" className="flex justify-between items-center">
            <NavLink to="/" className="p-5 font-display">
              Logo
            </NavLink>

            <button className="p-5" onClick={() => closeIcon()}>
              <IoClose style={{ fontSize: "25px" }} />
            </button>
          </div>
          <div className="pl-5">
            <ul className="">
              <li className="hover:bg-stone-100 m-3 p-3">
                <NavLink to="/" onClick={() => closeIcon()}>
                  Home
                </NavLink>
              </li>
              <li className="hover:bg-stone-100 m-3 p-3">
                <NavLink to="/about" onClick={() => closeIcon()}>
                  About
                </NavLink>
              </li>
              <li className="hover:bg-stone-100 m-3 p-3">
                <NavLink to="/products" onClick={() => closeIcon()}>
                  Products
                </NavLink>
              </li>
              <li className="hover:bg-stone-100 m-3 p-3">
                <NavLink to="/contact" onClick={() => closeIcon()}>
                  Contact
                </NavLink>
              </li>

              <li className="hover:bg-stone-100 m-3 p-3">
                <NavLink className="" onClick={() => closeIcon()}>
                  Login
                </NavLink>
              </li>
              <li className="hover:bg-stone-100 m-3 p-3">
                <NavLink
                  to="/cart"
                  className="flex"
                  onClick={() => closeIcon()}
                >
                  <BsCart style={{ fontSize: "20px" }} />
                  <sub className="top-0 ml-1">0</sub>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
