import React from 'react';
import { connect } from 'react-redux'

import CardBlock from '../utils/CardBlock';
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
                <CardBlock 
                    list={this.props.products.bySell}
                    title="Best Selling Guitars"
                />
                <HomePromotion/>
                <CardBlock 
                    list={this.props.products.byArrival}
                    title="New Arrivals"
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products : state.products
})

export default connect(mapStateToProps)(Home)
