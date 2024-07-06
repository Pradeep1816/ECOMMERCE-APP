export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "PRODUCT_DATA":
      const featureProduct = action.payload.filter((currentItems) => {
        return currentItems.ratings === 4;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureProduct,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SINGLE_PAGE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SINGLE_PAZE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
  return state;
};
