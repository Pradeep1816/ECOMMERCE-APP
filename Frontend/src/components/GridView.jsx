import React from "react";

import Product from "./Product";
import GridProducts from "./GridProducts";

function GridView({ products }) {
  return (
    <>
      <div className="flex  flex-wrap justify-evenly">
        {products.map((currentItem, index) => {
          return <GridProducts key={currentItem.id} item={currentItem} />;
        })}
      </div>
    </>
  );
}

export default GridView;
