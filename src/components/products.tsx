import useAppContext from "../context/useappcontext";
import AddProductToCart from "./addproducttocart";

const Products = () => {
  const { appState } = useAppContext();
  console.log(appState.products);
  return (
    <>
      {appState.products.map((product) => (
        <div key={product.id}>
          <div>
            {product.name} for {product.price} Kr
          </div>
          <div>
            <AddProductToCart product={product} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
