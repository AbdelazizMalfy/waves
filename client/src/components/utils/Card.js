import React, { Component } from 'react'

class Card extends Component {
     
    renderCardImage = (images) => {
        if(images.length > 0){
            return images[0].url;
        }else {
            return '/images/image_not_availble.png'
        }
    }


    render() {
        const { grid, images ,name , brand, price } = this.props
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
                </div>
                {
                    grid ? 
                        <div className='description'>
                            Lorem Ipsim Holako and this is the end of the world we know.
                        </div>
                        :null
                }
            </div>
        )
    }
}
export default Card;