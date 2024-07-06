import React from "react";
import { useFilterContext } from "../Context/FilterContext";

function Sort() {
  const { sorting } = useFilterContext();
  return (
    <div>
      <form action="#">
        <select
          id="sort"
          class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
          onClick={sorting}
        >
          {/* <option value="#">Choose a country</option> */}
          <option value="lowest">Price: Low-High</option>
          <option value="highest">Price: High-Low</option>
          <option value="a-z">Price: A-Z</option>
          <option value="z-a">Price: Z-A</option>
        </select>
      </form>
    </div>
  );
}

export default Sort;
