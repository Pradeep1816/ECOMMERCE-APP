import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
};
const FilterProvider = (props) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    // console.log(bollean);
    dispatch({ type: "SET_GRID_VIEW" });
  };
  const setListView = () => {
    // console.log(bollean);
    dispatch({ type: "SET_LIST_VIEW" });
  };
  // sorting functions
  const sorting = (event) => {
    let inputValue = event.target.value;
    dispatch({ type: "SET_SORT_VALUE", payload: inputValue });
  };

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider };
