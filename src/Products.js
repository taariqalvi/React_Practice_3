import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './store/cartSlice'



const Products = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    }, [])

    const handleAdd = (product) => {
        dispatch(add(product))
    }

    return (
        <div className="productWrapper">
            {products.map((item) => {
                return <div className="card" key={item.id}>
                    <img src={item.image} alt="Product_Image" />
                    <div className="cardContent">
                        <p>{item.title.slice(0, 45)}</p>
                        <h5>Price - ${item.price}</h5>
                        <button onClick={() => handleAdd(item)} className='cartBtn'>Add to Cart</button>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Products