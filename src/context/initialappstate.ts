import AppState from "./appstate";

const initialAppState: AppState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
  ],
  cart: [],
};

export default initialAppState;
