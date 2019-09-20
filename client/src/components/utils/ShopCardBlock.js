import React from 'react';
import Card from '../utils/Card';

const ShopCardBlock = (props) => {


    return (
        <div className="card_block_shop">
            <div>
                <div>
                    { props.list ?
                    
                        props.list.length === 0 ?
                            <div className='no_result'>
                                Sorry, No results
                            </div>
                        : props.list.map(item=>(
                            <Card 
                                key={item._id}
                                {...item}
                                grid={props.grid}
                            />
                        ))
                    : null }
                </div>
            </div>
        </div>
    )
}

export default ShopCardBlock
