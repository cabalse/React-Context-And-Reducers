import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

const Context = createContext(initialState);

export const AppProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        ...state,
        dispatch,
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

