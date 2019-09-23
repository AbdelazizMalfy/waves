import React from 'react'

const ProductBlock = ({products,removeItem}) => {

    const renderItems = () => (
        products.cartDetails ?
            products.cartDetails.map(product =>(
                <div className='user_product_block' key={product._id}>
                    rwelw
                </div>
            ))

        : null 
    )

    return (
        <div>
            { renderItems()}
        </div>
    )
}

export default ProductBlock
