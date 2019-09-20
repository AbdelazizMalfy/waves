import React from 'react';

import ShopCardBlock from '../utils/ShopCardBlock';

const ShopCards = (props) => {
    return (
        <div>
            <div>
                <ShopCardBlock 
                    list={props.products}
                    grid={props.grid}
                />
            </div>
            {
                props.size > 0 && props.size >= props.limit ?
                <div className='load_more_container'>
                    <span onClick={() => props.loadMore()}>Load More</span>
                </div> 
                : 
                null
            }

            
        </div>
    )
}

export default ShopCards
