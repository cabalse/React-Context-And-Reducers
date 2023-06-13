import { createContext, useReducer } from "react";
import reducer from "./reducer";
import { initialState } from "./initstate";
import Product from "../models/product";
import CartItem from "../models/cartitem";

export const Context = createContext(initialState);

export const AppProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addProductToCard = (product: Product) => {
        dispatch({type: 'ADD_TO_CART', payload: product})
    }

    const removeCartItem = (cartItem: CartItem) => {
        dispatch({type: 'REMOVE_CARTITEM', payload: cartItem})
    }

    const value = {
        ...state,
        addProductToCard: addProductToCard,
        removeCartItem: removeCartItem,
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};
