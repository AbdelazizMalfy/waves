import React, { Component } from 'react';
import DashboardLayout from '../../../hoc/DashboardLayout/DashboardLayout';

import FormField from '../../utils/Form/FormField';
import { update , generateData , isFormValid } from '../../utils/Form/FormActions';

import { connect } from 'react-redux';
import { getBrands , getWoods } from '../../../actions/products_actions'; 

class AddProduct extends Component {
    state = {
        formError:false,
        formSuccess:false,
        formdata:{
            name:{
                element:'input',
                value:'',
                config:{
                    label:'Product Name',
                    name:'name_input',
                    type:'text',
                    placeholder:'Enter Product Name'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:'',
                showlabel:true
            },
            description:{
                element:'textarea',
                value:'',
                config:{
                    label:'Product description',
                    name:'description_input',
                    type:'text',
                    placeholder:'Enter Product description'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:'',
                showlabel:true
            },
            price:{
                element:'input',
                value:'',
                config:{
                    label:'Product Price',
                    name:'price_input',
                    type:'number',
                    placeholder:'Enter Product Price'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:'',
                showlabel:true
            },
            brand:{
                element:'select',
                value:'',
                config:{
                    label:'Product Brand',
                    name:'brand_input',
                    options:[]
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:'',
                showlabel:true
            },
            shipping:{
                element:'select',
                value:'',
                config:{
                    label:'Shipping',
                    name:'shipping_input',
                    options:[
                        {key:true, value:'Yes'},
                        {key:false, value:'No'},
                    ]
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:'',
                showlabel:true
            },
            available:{
                element:'select',
                value:'',
                config:{
                    label:'Available In Stock',
                    name:'available_input',
                    options:[
                        {key:true, value:'Yes'},
                        {key:false, value:'No'},
                    ]
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:'',
                showlabel:true
            },
            wood:{
                element:'select',
                value:'',
                config:{
                    label:'Wood Material',
                    name:'wood_input',
                    options:[]
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:'',
                showlabel:true
            },
            frets:{
                element:'select',
                value:'',
                config:{
                    label:'Frets',
                    name:'frets_input',
                    options:[
                        {key:20, value:'20'},
                        {key:21, value:'21'},
                        {key:22, value:'22'},
                        {key:24, value:'24'},
                    ]
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:'',
                showlabel:true
            },
            publish:{
                element:'select',
                value:'',
                config:{
                    label:'Publish',
                    name:'publish_input',
                    options:[
                        {key:true, value:'Public'},
                        {key:false, value:'Hidden'},
                    ]
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:'',
                showlabel:true
            }
        }
    }

    render() {
        return (
            <DashboardLayout>
            <div>
                <h1>Add Product</h1>
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <FormField 
                        id={'name'}
                        formdata={this.state.formdata.name}
                        change={(element) => this.updateForm(element)}
                    />
                </form>
            </div>
            </DashboardLayout>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})


export default connect(mapStateToProps)(AddProduct);