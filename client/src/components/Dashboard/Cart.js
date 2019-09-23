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

    removeFromCart = () => {

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
                    </div>
                </div>
            </DashboardLayout>
        )
    }
}


const mapStateToProps = state => ({
    user:state.user
})

export default connect(mapStateToProps)(UserCart);