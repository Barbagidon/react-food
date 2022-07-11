import { useReducer } from "react";
import { createContext } from "react";

import reducer from "../reducer/reducer";

export const FoodContext = createContext();

const intialState = {
  goodies: [],
  filteredCategory: [],
  loading: false,
  reciepe: {},
  searchValue: "",
  searchArr: [],
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, intialState);

  value.getCategories = (item) => {
    dispatch({ type: "GET_ALL_CATEGORIES", payload: item });
  };

  value.setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  value.filterCategory = (item) => {
    dispatch({ type: "FILTER_CATEGORY", payload: item });
  };

  value.getReciepe = (item) => {
    dispatch({ type: "GET_RECIEPE", payload: item });
  };

  value.setSearchValue = (value) => {
    dispatch({ type: "SET_SEARCH_VALUE", payload: value });
  };

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};
