import React, { createContext, useContext } from "react";
import { useFitnessReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useFitnessReducer({
		conversations: [],
		contacts: [],
		goals: [],
		// yunik testing
		classItems: []
	});

	return <Provider value={[state, dispatch]} {...props} />;
};



const useStoreContext = () => {
	return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
