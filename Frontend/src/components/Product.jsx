import React from "react";
import { NavLink } from "react-router-dom";

function Product({ currentItem }) {
  const { id, name, img, price, rating, category } = currentItem;
  return (
    <NavLink to={`/singleProduct/${id}`}>
      <div className="hover:scale-75 ">
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
        <div className="text-sm text-center text-white mt-5">{name}</div>
        <div className="text-sm text-center text-white font-bold">
          Price: {price}
        </div>
      </div>
    </NavLink>
  );
}

export default Product;
