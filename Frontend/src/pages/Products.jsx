import React from "react";
import { useProductContext } from "../Context/ProductContext";
import Sort from "../components/Sort";
import ProductsList from "../components/ProductsList";
import FilterSection from "../components/FilterSection";
import { useFilterContext } from "../Context/FilterContext";
import Layout from "../components/Layout/Layout";
import { FaListUl } from "react-icons/fa";
import { IoMdGrid } from "react-icons/io";
import { NavLink } from "react-router-dom";
function Products() {
  const { setGridView, setListView, grid_view } = useFilterContext();
  return (
    <Layout>
      <div>
        <div className="flex md:flex-row gap-5 w-3/4 m-auto mt-10">
          <div className="col-span-2">col1</div>
          <div>
            <div className="border flex justify-between  item-center p-2">
              <div className="flex items-center gap-5">
                <NavLink>
                  <button
                    onClick={setGridView}
                    className={`${
                      grid_view ? "bg-stone-500 text-xl" : "bg-white text-xl"
                    }`}
                  >
                    <IoMdGrid />
                  </button>
                </NavLink>
                <NavLink>
                  <button
                    onClick={setListView}
                    className={`${
                      !grid_view ? "bg-stone-500 text-xl" : "bg-white text-xl"
                    }`}
                  >
                    <FaListUl />
                  </button>
                </NavLink>
              </div>
              <div className="">
                <Sort />
              </div>
            </div>
            <div className="flex flex-wrap">
              <ProductsList />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Products;
