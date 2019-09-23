import React, { Component } from 'react';
import DashboardLayout from '../../hoc/DashboardLayout/DashboardLayout';

import { connect } from 'react-redux';

import { getCartItems } from '../../actions/user_actions';
import ProductBlock from '../utils/ProductBlock';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown'
import faSmile from '@fortawesome/fontawesome-free-solid/faSmile'

class UserCart extends Component {

    state = {
        loading: true,
        total:0,
        showTotal: false,
        showSuccess:false
    }

    componentDidMount(){
        let cartIds = [];
        let user = this.props.user;

        if(user.userData.cart){
            if(user.userData.cart.length > 0){

                user.userData.cart.forEach(item=>{
                    cartIds.push(item.id)
                })

                this.props.dispatch(getCartItems(cartIds,user.userData.cart))
                .then(()=>{
                    if(this.props.user.cartDetails.length > 0){
                        this.calculateTotal(this.props.user.cartDetails)
                    }
                })

            }
        }
    }
    
    calculateTotal = (cartDetails) => {
        let total = 0;

        cartDetails.forEach(item=>{
            total += parseInt(item.price,10) * item.quantity
        })

        this.setState({
            total,
            showTotal:true
        })
    }

    removeFromCart = () => {

    }

    showNoItemMessage = () => {
        return  (
            <div className='cart_no_items'>
                <FontAwesomeIcon icon={faFrown} />
                <div>
                    You have No Items
                </div>
            </div>
        )
    }

    render() {
        return (
            <DashboardLayout>
                <div>
                    <h1>My Cart</h1>
                    <div className='user_cart'>
                        <ProductBlock
                            products={this.props.user}
                            type='cart'
                            removeItem={(id) => this.removeFromCart(id)}
                        />
                        {
                            this.state.showTotal ? 
                            <div className='user_cart_sum'>
                                <div>
                                    Total amount: ${this.state.total}
                                </div>
                            </div>
                            :
                                this.state.showSuccess ? 
                                    <div className='cart_success'>
                                        <FontAwesomeIcon icon={faFrown} />
                                            <div>
                                                THANK YOU
                                            </div>
                                            <div>
                                                YOUR ORDER IS COMPLETE
                                            </div>
                                    </div>
                                : 
                                this.showNoItemMessage()
                        }
                    </div>
                    {
                        this.state.showTotal?
                        <div className='paypal_button_container'>
                            Paypal
                        </div>
                        : null
                    }
                </div>
            </DashboardLayout>
        )
    }
}


const mapStateToProps = state => ({
    user:state.user
})

export default connect(mapStateToProps)(UserCart);