const filter_reducer = (state, action) => {
  switch (action.type) {
    case "FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "SET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };
    case "SORTING_PRODUCTS":
      let sortedProducts;
      const { filter_products } = state;
      let newSortedProducts = [...filter_products];

      const sotingProducts = (a, b) => {
        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }

        if (state.sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (state.sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      sortedProducts = newSortedProducts.sort(sotingProducts);

      return {
        ...state,
        filter_products: sortedProducts,
      };

    default:
      state;
  }
  return state;
};

export default filter_reducer;
