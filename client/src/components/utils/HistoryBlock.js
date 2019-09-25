import React from 'react';
import moment from 'moment';

const HistoryBlock = (props) => {

    const renderBlocks = () => (
        props.productsHistory ?
            props.productsHistory.map((product,i)=>(
                <tr key={i}>
                    <td>{moment(product.dataOfPurchase).format("MM-DD-YYYY")}</td>
                    <td>{product.brand.name}{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.quantity}</td>
                </tr>
            ))
        : null
    )

    return (
        <div className='history_blocks'>
            <table>
                <thead>
                    <tr>
                        <th>Date of purchase</th>
                        <th>Product</th>
                        <th>Price Paid</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {renderBlocks()}
                </tbody>
            </table>
        </div>
    )
}

export default HistoryBlock
