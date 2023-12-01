import cloneArray from "../../utilities/clonearray";

const ActionType = {
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
};

const productReducer = (state: any, action: any) => {
  const { type, payload } = action;
  const product = cloneArray(state.product);

  switch (type) {
    case ActionType.ADD_PRODUCT:
      product.push(payload);
      return {
        ...state,
        product: product,
      };
    case ActionType.REMOVE_PRODUCT: {
      const index = product.findIndex(
        (product: any) => product.id === payload.id
      );
      product.splice(index, 1);
      return {
        ...state,
        product: product,
      };
    }
    default:
      return state;
  }
};

export default productReducer;
export { ActionType };
