import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getWoods , postWood} from '../../../actions/products_actions';
import FormField from '../../utils/Form/FormField';
import { update , generateData , isFormValid , resetFields } from '../../utils/Form/FormActions';


class AddWood extends Component {
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
                validationMessge:''
            }
        }
    }


    componentDidMount(){
        this.props.dispatch(getWoods());
    }


    updateForm = element => {
        const newFormdata = update(element,this.state.formdata,'woods');
        this.setState({
            formError:false,
            formdata: newFormdata
        })

    }

    resetFieldsHandler = () => {
        const newFormdata = resetFields(this.state.formdata,'woods');

        this.setState({
            formdata: newFormdata,
            formSuccess: true
        })
    }


    onSubmitForm = e =>{
        e.preventDefault();

        let dataToSubmit = generateData(this.state.formdata,'woods')
        let formIsValid = isFormValid(this.state.formdata,'woods')
        let existingWoods = this.props.products.woods; 
        
        if(formIsValid){
           this.props.dispatch(postWood(dataToSubmit,existingWoods))
            .then(()=>{
                console.log(this.props.products.addWoodSuccess)
            if(this.props.products.addWoodSuccess){
                this.resetFieldsHandler();
            }else {
                this.setState({formError: true});
            }
           });
        }else {
            this.setState({formError:true})
        }
    }

 
    showWoods = () => (
        this.props.products.woods ?
        this.props.products.woods.map(wood=>(
            <div className='category_item' key={wood._id} >
                <p>{wood.name}</p>
            </div>
        ))
        : null
    )    


    render() {
        return (
            <div className='admin_category_wrapper'>
                <h1>Woods</h1>
                <div className='admin_two_column'>
                    <div className='left'>
                        <div className='brands_container'>
                            {this.showWoods()}    
                        </div>
                    </div>

                    <div className='right'>
                        <form onSubmit={(e) => this.onSubmitForm(e)} >
                                <FormField 
                                    id={'name'}
                                    formdata={this.state.formdata.name}
                                    change={(element) => this.updateForm(element)}
                                />
                                {this.state.formError ? 
                                    <div className='error_label'>
                                        Please check your data
                                    </div>: null
                                 }
                                 { this.state.formSuccess ? 
                                <div className='form_success'>
                                    Wood Added
                                </div>: null
                            }
                            {this.state.formError ? 
                                <div className='error_label'>
                                    Please check your data
                                </div>: null
                            }
                                <button type="submit">ADD Wood</button>
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


export default connect(mapStateToProps)(AddWood);