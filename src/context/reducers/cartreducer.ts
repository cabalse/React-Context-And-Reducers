import CartItemType from "../../models/cartitem";
import ProductType from "../../models/product";
import cloneArray from "../../utilities/clonearray";
import AppState from "../appstate";

enum ActionType {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_CARTITEM = "REMOVE_CARTITEM",
}

type Action = {
  type: ActionType;
  payload: CartItemType | ProductType;
};

const cartReducer = (state: AppState, action: Action) => {
  const { type, payload } = action;
  const cart = cloneArray(state.cart);

  switch (type) {
    case ActionType.ADD_TO_CART: {
      const index = cart.findIndex((p: CartItemType) => p.id === payload.id);
      if (index !== -1) {
        cart[index].quantity += 1;
      } else {
        cart.push({
          id: payload.id,
          productId: payload.id,
          quantity: 1,
        });
      }
      return {
        ...state,
        cart: cart,
      };
    }
    case ActionType.REMOVE_CARTITEM:
      const index = cart.findIndex((p: CartItemType) => p.id === payload.id);
      cart[index].quantity -= 1;
      return {
        ...state,
        cart: cart,
      };
    default:
      return state;
  }
};

export default cartReducer;
export type { Action };
export { ActionType };
