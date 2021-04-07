import { useReducer } from "react";

import { UPDATE_CONVERSATIONS, UPDATE_CONTACTS, UPDATE_GOALS } from "./actions";

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
				conversations: [...action.products],
			};
		case UPDATE_CONTACTS:
			return {
				...state,
				contacts: [...action.contacts],
			};
		default:
			return {
				state,
			};
	}
};

export function useFitnessReducer(initialState) {
	return useReducer(reducer, initialState);
}
