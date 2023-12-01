import useAppContext from "../context/useappcontext";
import CartItem from "./cartitem";

const Cart = () => {
  const { appState } = useAppContext();
  return (
    <div>
      <div>Cart (Amount: {appState.cart.length})</div>
      <div>
        {appState.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
