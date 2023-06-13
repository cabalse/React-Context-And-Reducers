import CartItemType from "../../models/cartitem";
import cloneArray from "../../utilities/clonearray";

enum ActionType {
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_CARTITEM = "REMOVE_CARTITEM",
}

const cartReducer = (state: any, action: any) => {
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
            return {
                ...state,
                total: state.total - 1,
            };
        default:
            return state;
    }
}

export default cartReducer;
export { ActionType };
