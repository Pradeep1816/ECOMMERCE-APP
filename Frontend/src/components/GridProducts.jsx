import React from "react";
import Product from "./Product";
import { NavLink } from "react-router-dom";
function GridProducts({ item }) {
  const { img, name, category, price, id } = item;
  return (
    <div>
      <NavLink to={`/singleProduct/${id}`}>
        <div className="my-3 h-[45vh] w-[200px] bg-cover bg-center hover:scale-110 duration-200 relative">
          <figure>
            <img
              src={img}
              alt={category}
              className="h-[200px] w-[200px] md:w-[200px] mt-5 m-auto"
            />
            <figcaption className="absolute top-2 right-5 bg-stone-200 p-2 rounded-full">
              {category}
            </figcaption>
          </figure>
          <div className="text-sm text-center mt-5">{name}</div>
          <div className="text-sm text-center font-bold">Price: {price}</div>
        </div>
      </NavLink>
    </div>
  );
}

export default GridProducts;
