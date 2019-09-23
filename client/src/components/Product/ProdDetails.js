import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

import MyButton from '../utils/MyButton';

const ProdDetails = (props) => {

    const showProdTags = (details) =>(
        <div className='product_tags'>
            { 
                details.shipping ? 
                    <div className='tag'>
                        <div>
                            <FontAwesomeIcon icon={faTruck} />
                        </div>
                        <div className='tag_text'>
                            <div>Free Shipping</div>
                            <div>And Return</div>
                        </div>
                    </div>
                    : null
            }
            {
                details.available ? 
                    <div className='tag'>
                        <div>
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className='tag_text'>
                            <div>Available</div>
                            <div>In Store</div>
                        </div>
                    </div>
                    :   
                        <div className='tag'>
                            <div>
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                            <div className='tag_text'>
                                <div>Not Available</div>
                                <div>Preorder Only</div>
                            </div>
                        </div>
            }
        </div>
    )



    const {details} = props;
    return (
        <div>
            <h1>{details.brand.name} - {details.name}</h1> 
            <p>{details.description}</p>
            { showProdTags(details) }
            {/* { showProdActions(details) } */}
        </div>
    )
}

export default ProdDetails
