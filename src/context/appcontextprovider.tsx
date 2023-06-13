import { createContext, useReducer } from "react";
import { initialState } from "./initstate";
import Product from "../models/product";
import CartItem from "../models/cartitem";
import productReducer, { ActionType as ProductReducerActionType } from "./reducers/productreducer";
import cartReducer, { ActionType as CartReducerActionType } from "./reducers/cartreducer";

export const Context = createContext(initialState);

type AppContextProviderProps = {
    children: React.ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [state, cartDispatch] = useReducer(cartReducer, initialState);
    const [, productDispatch] = useReducer(productReducer, initialState);

    const addProductToCard = (product: Product) => {
        cartDispatch({type: CartReducerActionType.ADD_TO_CART, payload: product})
    }

    const removeCartItem = (cartItem: CartItem) => {
        cartDispatch({type: CartReducerActionType.REMOVE_CARTITEM, payload: cartItem})
    }

    const addProduct = (product: Product) => {
        productDispatch({type: ProductReducerActionType.ADD_PRODUCT, payload: product})
    }

    const removeProduct = (product: Product) => {
        productDispatch({type: ProductReducerActionType.REMOVE_PRODUCT, payload: product})
    }

    const value = {
        ...state,
        addProductToCard: addProductToCard,
        removeCartItem: removeCartItem,
        addProduct: addProduct,
        removeProduct: removeProduct
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};
