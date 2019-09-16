import React from 'react';
import { connect } from 'react-redux'

import HomeSlider from './HomeSlider';
import HomePromotion from './HomePromotion';
import { getProductBySell , getProductByArrival } from '../../actions/products_actions';



class Home extends React.Component{

    componentDidMount(){
        this.props.dispatch(getProductBySell());
        this.props.dispatch(getProductByArrival());
    }

    render(){
        return (
            <div>
                <HomeSlider/>
                <HomePromotion/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products : state.products
})

export default connect(mapStateToProps)(Home)
