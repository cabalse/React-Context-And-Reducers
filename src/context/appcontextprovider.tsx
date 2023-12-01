import { createContext, useReducer } from "react";
import { initialContextState } from "./initialcontextstate";
import Product from "../models/product";
import CartItem from "../models/cartitem";
import productReducer, {
  ActionType as ProductReducerActionType,
} from "./reducers/productreducer";
import cartReducer, {
  ActionType as CartReducerActionType,
} from "./reducers/cartreducer";
import ContextState from "./contextstate";
import initialAppState from "./initialappstate";

export const Context = createContext(initialContextState);

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, cartDispatch] = useReducer(cartReducer, initialAppState);
  const [, productDispatch] = useReducer(productReducer, initialAppState);

  const addProductToCard = (product: Product) => {
    cartDispatch({ type: CartReducerActionType.ADD_TO_CART, payload: product });
  };

  const removeCartItem = (cartItem: CartItem) => {
    cartDispatch({
      type: CartReducerActionType.REMOVE_CARTITEM,
      payload: cartItem,
    });
  };

  const addProduct = (product: Product) => {
    productDispatch({
      type: ProductReducerActionType.ADD_PRODUCT,
      payload: product,
    });
  };

  const removeProduct = (product: Product) => {
    productDispatch({
      type: ProductReducerActionType.REMOVE_PRODUCT,
      payload: product,
    });
  };

  const value: ContextState = {
    appState: state,
    addProductToCard: addProductToCard,
    removeCartItem: removeCartItem,
    addProduct: addProduct,
    removeProduct: removeProduct,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
