import useAppContext from "../context/useappcontext";
import AddProductToCart from "./addproducttocart";

const Products = () => {
    const { products } = useAppContext();
return (
    <>
    {products.map(product => (
        <div key={product.id}>
            <div>{product.name} for {product.price} Kr</div>
            <div><AddProductToCart product={product} /></div>
        </div>
    ))}
    </>
)
}

export default Products;
