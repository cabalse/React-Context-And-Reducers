import useAppContext from "../context/useappcontext";
import CartItemType from "../models/cartitem";
import RemoveCartItem from "./removecartitem";

type CartItemProps = {
    cartItem: CartItemType;
}

const CartItem = ({ cartItem }:CartItemProps) => {
    const {products} = useAppContext();
    const product = products.find(product => product.id === cartItem.productId);
    if (product) {
        return (
            <div>
                <div>Name: {product.name}</div>
                <div>Price: {product.price}</div>
                <div>Quantity: {cartItem.quantity}</div>
                <div><RemoveCartItem cartItem={cartItem}/></div>
            </div>
        )
    } else {
        return (
            <div>
                <div>Product not found</div>
            </div>
        )
    }
};

export default CartItem;
