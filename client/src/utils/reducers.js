import { useReducer } from "react";

import {
  UPDATE_SOMETHING
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
    case UPDATE_SOMETHING:
      return {
        ...state,
        products: [...action.products],
      };
    
    // if none of these actions, do not update state
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
