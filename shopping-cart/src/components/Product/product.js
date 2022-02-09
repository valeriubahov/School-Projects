//start making a class-based component called Product
import React, { useEffect, useState } from 'react';
import './product.css';



const Product = function (props) {
    const [quantity, setQuantity] = useState(0);

    // useEffect(() => {
    //     document.title = `You clicked ${quantity} times`;
    // });

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (!(quantity === 0)) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className='prodTile'>
            <header>{props.prodTitle}</header>
            <div className='quant'>Quantity: {quantity}</div>
            <div>{props.description}</div>
            <div>${props.price}</div>

            <div className='quant'>${parseFloat(props.price * quantity).toFixed(2)}</div>

            <button onClick={increaseQuantity} >Inc Quantity</button>
            <button onClick={decreaseQuantity}>Dec Quantity</button>
        </div>
    );

}

export default Product;