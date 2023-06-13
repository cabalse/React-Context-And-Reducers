import useAppContext from "../context/useappcontext";
import ProductType from "../models/product";

type AddProductToCartProps = {
    product: ProductType;
}

const AddProductToCart = ({product}: AddProductToCartProps) => {
    const {addProductToCard} = useAppContext();
    return (
        <button onClick={() => addProductToCard ? addProductToCard(product) : null }>Add to Cart</button>
    )
}

export default AddProductToCart;
