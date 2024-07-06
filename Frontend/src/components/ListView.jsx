import React from "react";
import { useFilterContext } from "../Context/FilterContext";
import ListProducts from "./ListProducts";
import { NavLink } from "react-router-dom";

function ListView({ products }) {
  return (
    <div className="">
      <div className="">
        {products.map((currentItem, index) => {
          const { img, name, seller, category, price, id } = currentItem;
          return (
            <div>
              <div className="md:flex gap-10 border p-1 my-5">
                <div className="hover:scale-110 duration-200">
                  <figure>
                    <img
                      src={img}
                      alt=""
                      className="h-[200px] w-full md:w-[200px]"
                    />
                  </figure>
                </div>
                <div className="flex justify-center items-center">
                  <div>
                    <h1>{name}</h1>
                    <h1>
                      <span className="font-bold">Price: </span>
                      {price}
                    </h1>
                    <h1>
                      <span className="font-bold">Seller: </span>
                      {seller}
                    </h1>
                    <NavLink to={`/singleProduct/${id}`}>
                      <button className="bg-white text-gray-500 border p-2 hover:bg-violet-600 hover:text-white    ease-in-out duration-300 uppercase mt-5">
                        Read More
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListView;
