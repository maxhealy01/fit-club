import { useReducer } from "react";

import {
  UPDATE_CONVERSATIONS
} from "./actions"

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CONVERSATIONS:
      return {
        ...state,
        conversations: [...action.products],
      }
    default:
      return {
        state
      }
  }
}