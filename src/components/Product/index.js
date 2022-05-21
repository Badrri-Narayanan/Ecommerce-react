import React from 'react'
import './styles.css'

const Product = ({ name, price, stock}) => (
    <div className='product-container'>
        <strong>Name: </strong>{name}
        <strong>Price: </strong>{price}
        <strong>Available stock: </strong>{stock}
    </div>
)

export default Product