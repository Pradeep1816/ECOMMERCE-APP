import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <>
      {/* //Footer section */}
      <footer className="bg-stone-900 p-5 text-white w-full mx-auto mt-auto">
        <div className="grid md:grid-cols-4 w-full md:w-[90%] p-5">
          <div className="col-1 text-center md:text-left">
            <h2 className="text-xl uppercase py-5">Shoping Cart</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              alias illum sit provident id.
            </p>
          </div>
          <div className="products text-center md:text-left">
            <h1 className="text-xl uppercase py-5">Products</h1>
            <div>
              <h1>products1</h1>
            </div>
            <div>
              <h1>products1</h1>
            </div>
            <div>
              <h1>products1</h1>
            </div>
            <div>
              <h1>products1</h1>
            </div>
          </div>
          <div className="Links text-center md:text-left">
            <h1 className="text-xl uppercase py-5">Links</h1>
            <div>
              <h1>Links</h1>
            </div>
            <div>
              <h1>Links</h1>
            </div>
            <div>
              <h1>Links</h1>
            </div>
            <div>
              <h1>Links</h1>
            </div>
          </div>
          <div className="contact md:text-left">
            <h1 className="text-xl uppercase py-5">Contact</h1>
            <div className="flex items-center gap-2 my-2">
              <IoHome />
              <h2 className="text-sm">New Delhi, Noida-1000011,India</h2>
            </div>
            <div className="flex items-center gap-2 my-2 ">
              <MdEmail />
              <h2>xyx@gmail.com</h2>
            </div>
            <div className="flex items-center gap-2 my-2">
              <MdAddIcCall />
              <a href="tel:9973718001">+91 9973718001</a>
            </div>
          </div>
        </div>
        <hr className="h-px my-5 bg-gray-300 border-0 dark:bg-gray-500" />
        <div>
          <div></div>
          <div className="p-5 container flex flex-col md:flex-row raltive">
            <div className="w-full md:w-1/2 md:flex gap-5">
              <div>Privacy & Policy</div>
              <div>Terms & Conditions</div>
              <div>Code of Product</div>
            </div>
            <div className="absolute right-5">
              <figure className="flex justify-center items-center gap-2">
                <NavLink>
                  <img
                    src="images/twit.png"
                    alt=""
                    className="transition delay-200 duration-500 ease-in-out h-4 hover:h-6"
                  />
                </NavLink>
                <NavLink>
                  <img
                    src="images/insta.webp"
                    alt=""
                    className="h-4 transition delay-200 duration-500 ease-in-out hover:h-6"
                  />
                </NavLink>
                <NavLink>
                  <img
                    src="images/facebook.png"
                    alt=""
                    className="h-4 transition delay-200 duration-500 ease-in-out hover:h-6"
                  />
                </NavLink>
                <NavLink>
                  <img
                    src="images/whatsapp.webp"
                    alt=""
                    className="h-4 transition delay-200 duration-500 ease-in-out hover:h-6"
                  />
                </NavLink>
              </figure>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
