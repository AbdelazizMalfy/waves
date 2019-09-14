import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormField from '../utils/FormField'

class Login extends Component {
    state = {
        formError:false,
        formSuccess:'',
        formdata:{
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
                    required:true,
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
        }
    }

    onSubmitForm = e =>{

    }


    updateForm = e => {
        
    }

    render() {
        return (
            <div className='signin_wrapper'>
                <form onSubmit={(e) => this.onSubmitForm(e)}>
                    <FormField 
                        id={'email'}
                        formdata={this.state.formdata.email}
                        change={(e)=> this.updateForm(e)}
                    />
                    <FormField 
                        id={'password'}
                        formdata={this.state.formdata.password}
                        change={(e)=> this.updateForm(e)}
                    />
                </form>
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

export default connect()(Login)
