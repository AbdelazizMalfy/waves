import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageTop from '../utils/PageTop';
import { getProductDetail , clearProductDetail } from '../../actions/products_actions';
import { addToCart } from '../../actions/user_actions';
import ProdDetails from './ProdDetails';
import ProdImg from './ProdImg';

class ProductDetails extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.dispatch(getProductDetail(id))
            .then(response =>{
                if(!this.props.products.prodDetails){
                    this.props.history.push('/')
                }
            })
    }

    componentWillUnmount(){
        this.props.dispatch(clearProductDetail());
    }

    addToCartHandler(id){
        this.props.dispatch(addToCart(id))
    }

    render() {
        console.log(this.props.products.prodDetails);
        return (
            <div >
                <PageTop
                    title='Product Details'
                />
                <div className='container'>
                    {
                        this.props.products.prodDetails ?
                        <div className='product_detail_wrapper'>
                            <div className='left'>
                                <div style={{width:'500px'}}>
                                    <ProdImg 
                                        details={this.props.products.prodDetails}
                                    />
                                </div>
                            </div>
                            <div className='right'>
                                <ProdDetails 
                                    addToCart={(id) => this.addToCartHandler(id)}
                                    details={this.props.products.prodDetails}
                                />          
                            </div>
                        </div> : 'Loading'
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductDetails);