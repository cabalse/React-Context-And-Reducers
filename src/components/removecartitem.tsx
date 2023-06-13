import useAppContext from "../context/useappcontext";
import CartItem from "../models/cartitem";

type RemoveProductToCartProps = {
    cartItem: CartItem;
}

const RemoveCartItem = ({cartItem}:RemoveProductToCartProps) => {
    const {removeCartItem} = useAppContext();
    return (
        <div>
            <button onClick={() => removeCartItem ? removeCartItem(cartItem) : null }>-</button>
        </div>
    )
}

export default RemoveCartItem;
