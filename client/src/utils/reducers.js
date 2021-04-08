import { useReducer } from "react";

import { UPDATE_CONVERSATIONS, UPDATE_CONTACTS, UPDATE_GOALS, TOGGLE_CHAT } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_GOALS: 
      return {
        ...state,
        goals: [...action.goals],
      };
    case UPDATE_CONVERSATIONS:
      return {
        ...state,
        conversations: [...action.conversations],
      };
    case UPDATE_CONTACTS:
      return {
        ...state,
        contacts: [...action.contacts],
      };
    case TOGGLE_CHAT:
      return {
        ...state,
        chatOpen: !state.chatOpen
      }
    default:
      return {
        state,
      };
  }
};

export function useFitnessReducer(initialState) {
  return useReducer(reducer, initialState);
}
