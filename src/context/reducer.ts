import CartItemType from "../models/cartitem";

const clone = (arr: any[]) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const newObj = {...arr[i]}
        newArr.push(newObj);
    }
    return newArr;
}

const reducer = (state: any, action: any) => {
    const { type, payload } = action;

    const cart = clone(state.cart);

    switch (type) {
        case "ADD_TO_CART": {
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
        case "REMOVE_CARTITEM":
            return {
                ...state,
                total: state.total - 1,
            };
        default:
            return state;
    }
}

export default reducer;
