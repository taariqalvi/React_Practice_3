import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from './store/cartSlice'


const Cart = () => {

    const dispatch = useDispatch()

    const productSelector = useSelector((state) => state.cart)

    const handleRemove = (productId) => {
        dispatch(remove(productId))
    }

    return (
        <React.Fragment>
            <h2>Cart Products</h2>
            <h3>Here appers your selected products</h3>
            <h4>You can remove one or more products from the list</h4>
            <div className="cartWrapper">
                {productSelector.map((cartItem) => (
                    <div className="cartCard">
                        <img src={cartItem.image} alt="Product_Image" />
                        <h4>{cartItem.title}</h4>
                        <h4>{cartItem.price}`</h4>
                        <button className="cartBtn" onClick={() => handleRemove(cartItem.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default Cart