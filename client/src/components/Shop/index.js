import React, { Component } from 'react';
import PageTop from '../utils/PageTop';

import { connect } from 'react-redux';

import { getBrands , getWoods } from '../../actions/products_actions';

import CollapseCheckbox from '../utils/CollapseCheckbox';
import CollapseRadio from '../utils/CollapseRadio';

import { frets , price } from '../utils/fixedCategoryData';


class Shop extends Component {  

    state = {
        grid:'',
        limit:6,
        skip:0,
        filters:{
            brand:[],
            frets:[],
            wood:[],
            price:[]
        }
    }


    componentDidMount(){
        this.props.dispatch(getBrands())
        this.props.dispatch(getWoods())
    }


    handlePrice = (value) => {
        const data = price;
        let array = [];

        for(let key in price){
            if(data[key]._id === parseInt(value,10)){
                array = data[key].array
            }
        }

        return array;
    }

    handleFilters = (filters,category) =>{
        const newFilters = {...this.setState.filters}
        newFilters[category] = filters


        if( category === "price"){
            let priceValues = this.handlePrice(filters)
            newFilters[category] = priceValues;
        }

        this.setState({
            filters: newFilters
        })
    }

    render() {
        console.log(this.state)
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
                            <CollapseCheckbox 
                                initState={false}
                                title="frets"
                                list={frets}
                                handleFilters={(filters)=> this.handleFilters(filters,'frets')}
                            />
                            <CollapseCheckbox 
                                initState={false}
                                title="Wood"
                                list={products.woods}
                                handleFilters={(filters)=> this.handleFilters(filters,'wood')}
                            />
                            <CollapseRadio 
                                initState={true}
                                title="Price"
                                list={price}
                                handleFilters={(filters)=> this.handleFilters(filters,'price')}
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