import CartItemType from "../models/cartitem";
import ProductType from "../models/product";
import AppState from "./appstate";

type ContextState = {
  appState: AppState;
  addProductToCard?: (product: ProductType) => void;
  removeCartItem?: (cartItem: CartItemType) => void;
  addProduct?: (product: ProductType) => void;
  removeProduct?: (product: ProductType) => void;
};

export default ContextState;
