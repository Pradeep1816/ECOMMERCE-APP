import React from "react";

function ListProducts({ item }) {
  const { img, name, category, price } = item;
  console.log(item);
  return (
    <div>
      <div className="flex gap-5">
        <div>
          <figure>
            <img
              src={img}
              alt=""
              className="h-[200px] w-[200px] md:w-[200px] mt-5 m-auto"
            />
          </figure>
        </div>
        <div>
          <h1>{name}</h1>
          <h1>{price}</h1>
        </div>
      </div>
    </div>
  );
}

export default ListProducts;
