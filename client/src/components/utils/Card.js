import React, { Component } from 'react';
import MyButton from './MyButton';

class Card extends Component {
     
    renderCardImage = (images) => {
        if(images.length > 0){
            return images[0].url;
        }else {
            return '/images/image_not_availble.png'
        }
    }


    render() {
        const { grid, images ,name , brand, price , _id } = this.props
        return (
            <div className={`card_item_wrapper ${grid}`}>
                <div
                    className='image'
                    style={{
                        background:`url(${this.renderCardImage(images)}) no-repeat`
                    }}
                />
                <div className='action_container'>
                    <div className='tags'>
                        <div className='brand'>{brand.name}</div>
                        <div className='name'>{name}</div>
                        <div className='price'>${price}</div>
                    </div>
                {
                    grid ? 
                        <div className='description'>
                            <p>{this.props.description}</p>
                        </div>
                        :null
                }
                    <div className='actions'>
                        <div className='button_wrapp'>
                            <MyButton 
                                type='default'
                                altClass='card_link'
                                title="View product"
                                linkTo={`/product_detail/${_id}`}
                                addStyle={{
                                    margin: '10px 0 0 0'
                                }}

                            />
                        </div>
                        <div className='button_wrapp'>
                            <MyButton 
                                type='bag_link'
                                runAction={()=>{
                                    console.log('added to cart')
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;