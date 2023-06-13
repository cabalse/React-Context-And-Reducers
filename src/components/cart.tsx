import useAppContext from "../context/useappcontext";
import CartItem from "./cartitem";

const Cart = () => {
    const {cart} = useAppContext();
    return (
        <div>
            <div>Cart (Amount: {cart.length})</div>
            <div>{cart.map(cartItem => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
            </div>
        </div>
    )
}   

export default Cart;
