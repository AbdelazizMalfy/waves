import React, { Component } from 'react';
import PageTop from '../utils/PageTop';

import { connect } from 'react-redux';

import { getBrands , getWoods } from '../../actions/products_actions';


class Shop extends Component {


    componentDidMount(){
        this.props.dispatch(getBrands())
        this.props.dispatch(getWoods())
    }

    render() {
        return (
            <div>
                <PageTop title='Browse Products' />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps)(Shop);