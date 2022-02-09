import Product from '../Product/product'
const ProductList = function (props) {

   

    const listItems = props.products.map((prod) =>
        <Product key={prod.prodTitle} prodTitle={prod.prodTitle} description={prod.description} price={prod.price} />
    );
    return (
        <>{listItems}</>
    );
}

export default ProductList;