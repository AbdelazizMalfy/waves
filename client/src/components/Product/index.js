import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageTop from '../utils/PageTop';
import { getProductDetail , clearProductDetail } from '../../actions/products_actions';
import ProdDetails from './ProdDetails';

class ProductDetails extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.dispatch(getProductDetail(id));
    }

    componentWillUnmount(){
        this.props.dispatch(clearProductDetail());
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
                            <div className='left'>images</div>
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