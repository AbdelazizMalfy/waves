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
        </div>
    )
}

export default ShopCards
