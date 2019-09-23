import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import { addToCart } from '../../actions/user_actions';

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
                                    if(this.props.user.userData.isAuth){
                                        this.props.dispatch(addToCart(_id))
                                    } else {
                                        this.props.history.push('/register_login')
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    user:state.user
})


export default connect(mapStateToProps)(withRouter(Card));