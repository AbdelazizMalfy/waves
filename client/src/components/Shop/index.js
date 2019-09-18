import React, { Component } from 'react';
import PageTop from '../utils/PageTop';

import { connect } from 'react-redux';

import { getBrands , getWoods } from '../../actions/products_actions';

import CollapseCheckbox from '../utils/CollapseCheckbox';


class Shop extends Component {


    componentDidMount(){
        this.props.dispatch(getBrands())
        this.props.dispatch(getWoods())
    }

    handleFilters = () =>{

    }

    render() {
        const {products} = this.props
        return (
            <div>
                <PageTop title='Browse Products' />
                <div className='container'>
                    <div className='shop_wrapper'>
                        <div className='left'>
                            <CollapseCheckbox 
                                initState={true}
                                title="Brands"
                                list={products.brands}
                                handleFilters={(filters)=> this.handleFilters(filters,'brand')}
                            />
                        </div>
                        <div className='right'>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps)(Shop);