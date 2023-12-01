import CartItemType from "../models/cartitem";
import ProductType from "../models/product";

type AppState = {
  products: ProductType[];
  cart: CartItemType[];
};

export default AppState;
