import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { reducer } from "../reducer/productReducer";
const ProductContext = createContext();

const initalState = {
  isLoding: false,
  products: [],
  isError: false,
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const ProductProvider = (props) => {
  // const [products, setProducts] = useState([]);
  const [state, dispatch] = useReducer(reducer, initalState);

  const getProducts = async () => {
    dispatch({ type: "SET_ISLOADING" });
    try {
      const res = await axios.get("http://localhost:8081/api/v1/item/products");
      const products = res.data;
      dispatch({ type: "PRODUCT_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  const getSingleProducts = async (id) => {
    dispatch({ type: "SINGLE_PAGE_LOADING" });
    try {
      const res = await axios.get("http://localhost:8081/api/v1/item/products");

      const singleproduct = res.data.find((item) => item.id === id);

      dispatch({ type: "SINGLE_PRODUCT", payload: singleproduct });
    } catch (error) {
      dispatch({ type: "SINGLE_PAGE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ ...state, getSingleProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider };
