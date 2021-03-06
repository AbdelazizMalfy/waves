import React, { Component } from 'react';
import { connect } from 'react-redux';


import { update , generateData , isFormValid } from '../utils/Form/FormActions'
import FormField from '../utils/Form/FormField';
import { RegisterUser } from '../../actions/user_actions';


class Register extends Component {

    state = {
        formError:false,
        formSuccess:false,
        formdata:{
            name:{
                element: 'input',
                value:'',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder:'Enter your name'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            lastname:{
                element: 'input',
                value:'',
                config:{
                    name:'lastname_input',
                    type:'text',
                    placeholder:'Enter your lastname'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            email:{
                element: 'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder:'Enter your email'
                },
                validation:{
                    required:true,
                    email:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            password:{
                element: 'input',
                value:'',
                config:{
                    name:'password_input',
                    type:'password',
                    placeholder:'Enter your password'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            confirmPassword:{
                element: 'input',
                value:'',
                config:{
                    name:'confirmPassword_input',
                    type:'password',
                    placeholder:'confirm your password'
                },
                validation:{
                    required:true,
                    confirm: 'password'
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
        }
    }

    onSubmitForm = e =>{
        e.preventDefault();

        let dataToSubmit = generateData(this.state.formdata,'register')
        let formIsValid = isFormValid(this.state.formdata,'register')

        if(formIsValid){
            this.props.dispatch(RegisterUser(dataToSubmit))
            .then(response => {
                if(response.payload.registerSuccess){
                    this.setState(
                        { formSuccess: true, formError: false },
                        this.props.history.push('/register_login')
                        )
                }else {
                    this.setState({
                        formError:true
                    })
                }
            })
        }else {
            this.setState({
                formError:true
            })
        }
    }



    updateForm = element => {
        const newFormdata = update(element,this.state.formdata,'register');
        this.setState({
            formError:false,
            formdata: newFormdata
        })
    }

    
    render() {
        return (
            <div className='page_wrapper'>
                <div className='container'>
                    <div className='register_login_container'>
                        <div className='left'>
                            <form onSubmit={(e) =>this.onSubmitForm(e)} >
                                <h2>Enter Your Information</h2>
                                <div className='form_block_two'>
                                    <div className='block'>
                                        <FormField 
                                            id={'name'}
                                            formdata={this.state.formdata.name}
                                            change={(element)=> this.updateForm(element)}
                                        />
                                    </div>
                                    <div className='block'>
                                        <FormField 
                                            id={'lastname'}
                                            formdata={this.state.formdata.lastname}
                                            change={(element)=> this.updateForm(element)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <FormField 
                                        id={'email'}
                                        formdata={this.state.formdata.email}
                                        change={(element)=> this.updateForm(element)}
                                    />
                                </div>
                                <div className='form_block_two'>
                                    <div className='block'>
                                        <FormField 
                                            id={'password'}
                                            formdata={this.state.formdata.password}
                                            change={(element)=> this.updateForm(element)}
                                        />
                                    </div>
                                    <div className='block'>
                                        <FormField 
                                            id={'confirmPassword'}
                                            formdata={this.state.formdata.confirmPassword}
                                            change={(element)=> this.updateForm(element)}
                                        />
                                    </div>
                                </div>
                                { this.state.formError ? 
                                    <div className='error_label'>
                                        Please check your data
                                    </div>: null
                                }
                                <button type='submit'>Create New Account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect()(Register);