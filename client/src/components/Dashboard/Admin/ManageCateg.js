import React, { Component } from 'react';
import { connect } from 'react-redux';

import DashboardLayout from '../../../hoc/DashboardLayout/DashboardLayout';
import { getBrands , getWoods } from '../../../actions/products_actions';
import FormField from '../../utils/Form/FormField';
import { update , generateData , isFormValid } from '../../utils/Form/FormActions';


class ManageCateg extends Component {
    state = {
        formError:false,
        formSucces:false,
        formdata:{
            brandname:{
                element:'input',
                value:'',
                config:{
                    name:'brand_name_input',
                    type:'text',
                    placeholder:'Enter The Brand'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessge:''
            },
            woodname:{
                element:'input',
                value:'',
                config:{
                    name:'brand_name_input',
                    type:'text',
                    placeholder:'Enter The Brand'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessge:''
            }
        }
    }

    componentDidMount(){
        this.props.dispatch(getBrands());
        this.props.dispatch(getWoods());
        
    }

    showBrands = () =>(
        this.props.products.brands ?
        this.props.products.brands.map(brand=>(
            <div key={brand._id}>
                <p>{brand.name}</p>
            </div>
        ))
        : null
    )

    showWoods = () => (
        this.props.products.woods ?
        this.props.products.woods.map(wood=>(
            <div key={wood._id} >
                <p>{wood.name}</p>
            </div>
        ))
        : null
    )
    

    onAddBrandClick = () =>{

    }

    onAddWoodClick = () => {

    }

    updateForm = element => {
        const newFormdata = update(element,this.state.formdata,'products');
        this.setState({
            formError:false,
            formdata: newFormdata
        })

    }


    render() {
        return (
            <DashboardLayout>
                <div>
                    { this.showBrands()}
                    <FormField 
                        id={'brandname'}
                        formdata={this.state.formdata.brandname}
                        change={(element) => this.updateForm(element)}
                    />
                    <button onClick={this.onAddBrandClick}>ADD BRAND</button>
                    <hr />
                    { this.showWoods()}
                    <FormField 
                        id={'woodname'}
                        formdata={this.state.formdata.woodname}
                        change={(element) => this.updateForm(element)}
                    />
                    <button onClick={this.onAddWoodClick}>ADD WOOD</button>
                </div>
            </DashboardLayout>
        )
    }
}

const mapStateToProps = state => ({
    products : state.products
})

export default connect(mapStateToProps)(ManageCateg);