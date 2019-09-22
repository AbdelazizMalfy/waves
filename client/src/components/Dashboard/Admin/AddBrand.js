import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBrands, postBrand} from '../../../actions/products_actions';
import FormField from '../../utils/Form/FormField';
import { update , generateData , isFormValid , resetFields } from '../../utils/Form/FormActions';


class AddBrand extends Component {
    state = {
        formError:false,
        formSuccess:false,
        formdata:{
            name:{
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
                validationMessage:'',
            }
        }
    }


    
    componentDidMount(){
        this.props.dispatch(getBrands());
    }


    showBrands = () =>(
        this.props.products.brands ?
        this.props.products.brands.map(brand=>(
            <div className='category_item' key={brand._id}>
                <p>{brand.name}</p>
            </div>
        ))
        : null
    )



    updateForm = element => {
        const newFormdata = update(element,this.state.formdata,'brands');
        this.setState({
            formError:false,
            formdata: newFormdata
        })

    }


    resetFieldsHandler = () =>{
        const newFormData = resetFields(this.state.formdata,'brands');

        this.setState({
            formdata: newFormData,
            formSuccess:true
        });
    }

    onSubmitForm = e =>{
        e.preventDefault();

        let dataToSubmit = generateData(this.state.formdata,'brands');
        let formIsValid = isFormValid(this.state.formdata,'brands');
        let existingBrands = this.props.products.brands;
        
        if(formIsValid){
           this.props.dispatch(postBrand(dataToSubmit,existingBrands))
            .then(()=>{
            if(this.props.products.addBrandSuccess){
                this.resetFieldsHandler();
            }else {
                this.setState({formError: true});
            }
           });
        }else {
            this.setState({formError:true})
        }
    }


    render() {
        return (
            <div className='admin_category_wrapper'>
                <h1>Brands</h1>
                <div className='admin_two_column'>
                    <div className='left'>
                        <div className='brands_container'>
                            { this.showBrands()}    
                        </div>
                    </div>

                    <div className='right'>
                        <form onSubmit={(e) => this.onSubmitForm(e)} >
                            <FormField 
                                id={'name'}
                                formdata={this.state.formdata.name}
                                change={(element) => this.updateForm(element)}
                            />
                            { this.state.formSuccess ? 
                                <div className='form_success'>
                                    Brand Added
                                </div>: null
                            }
                            {this.state.formError ? 
                                <div className='error_label'>
                                    Please check your data
                                </div>: null
                            }
                            <button type="submit">ADD BRAND</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    products: state.products
})


export default connect(mapStateToProps)(AddBrand);