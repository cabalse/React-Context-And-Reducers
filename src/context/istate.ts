import CartItemType from "../models/cartitem";
import ProductType from "../models/product";

interface IState {
    products: ProductType[];
    cart: CartItemType[];
    addProductToCard?: (product: ProductType) => void;
    removeCartItem?: (cartItem: CartItemType) => void;
    addProduct?: (product: ProductType) => void;
    removeProduct?: (product: ProductType) => void;
}

export default IState;
