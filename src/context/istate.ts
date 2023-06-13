import CartItemType from "../models/cartitem";
import ProductType from "../models/product";

interface IState {
    products: ProductType[];
    cart: CartItemType[];
    addProductToCard?: (product: ProductType) => void;
    removeCartItem?: (cartItem: CartItemType) => void;
}

export default IState;
