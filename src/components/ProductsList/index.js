import React from 'react'
import Product from '../Product'

const ProductsList = ({productsList}) => {
    return (
        <div>
            {
                productsList.map((p,idx) => (
                    <Product key={idx} {...p} />
                ))
            }
        </div>
    )
}

export default ProductsList