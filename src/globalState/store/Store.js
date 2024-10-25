import React, { createContext, useReducer } from "react";
export const contextData = createContext();
const initialState = {
  userDetails: [],
  ProductsInCart: [],
};

const updaterFunction = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USERDETAILS":
      return { ...state, userDetails: [...state.userDetails, action.payload] };
    case "ADD_PRODUCTTOCART":
      return {
        ...state,
        ProductsInCart: [...state.ProductsInCart, action.payload],
      };
    default:
      return state;
  }
};
function Store({ children }) {
  const [currentState, Dispatcher] = useReducer(updaterFunction, initialState);

  return (
    <div>
      <contextData.Provider value={{ currentState, Dispatcher }}>
        {children}
      </contextData.Provider>
    </div>
  );
}

export default Store;
