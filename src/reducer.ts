export const initialState = {
    total: 0,
    products: [],
};

const reducer = (state: any, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TO_CART":
            console.log("ADD_TO_CART", payload);
            return {    
                ...state,
                products: payload.products,
            };
        case "REMOVE_FROM_CART":
            console.log("REMOVE_FROM_CART", payload);
            return {
                ...state,
                products: payload.products,
            };
        default:
            return state;
    }
}

export default reducer;
