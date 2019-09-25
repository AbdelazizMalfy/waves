import React, { Component } from 'react'
import { connect } from 'react-redux';

import { updateProfile , clearUpdateProfile } from '../../actions/user_actions';
import FormField from '../utils/Form/FormField';
import { update , generateData , isFormValid , populateFields } from '../utils/Form/FormActions'

class UpdatePersonalInfo extends Component {
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
            }
        }
    }


    onSubmitForm = e =>{
        e.preventDefault();

        let dataToSubmit = generateData(this.state.formdata,'update_user')
        let formIsValid = isFormValid(this.state.formdata,'update_user')

        if(formIsValid){
            this.props.dispatch(updateProfile(dataToSubmit))
                .then(()=>{
                    if(this.props.user.updateUserProfile){
                        this.setState({
                            formSuccess:true
                        }, ()=> {
                            setTimeout(() => {
                                this.props.dispatch(clearUpdateProfile());
                                this.setState({
                                    formSuccess:false
                                })
                            }, 2000);
                        })
                    }
                })
        } else {
            this.setState({
                formError:true
            })
        }
    }


    updateForm = element => {
        const newFormdata = update(element,this.state.formdata,'update_user');
        this.setState({
            formError:false,
            formdata: newFormdata
        })
    }
    

    
    componentDidMount(){
        const newFormdata = populateFields(this.state.formdata,this.props.user.userData)
        this.setState({
            formdata: newFormdata
        })
    }


    render() {
        return (
          <div>
            <form onSubmit={e => this.onSubmitForm(e)}>
              <h2>Personal Information</h2>
              <div className="form_block_two">
                <div className="block">
                  <FormField
                    id={"name"}
                    formdata={this.state.formdata.name}
                    change={element => this.updateForm(element)}
                  />
                </div>
                <div className="block">
                  <FormField
                    id={"lastname"}
                    formdata={this.state.formdata.lastname}
                    change={element => this.updateForm(element)}
                  />
                </div>
              </div>
              <div>
                <FormField
                  id={"email"}
                  formdata={this.state.formdata.email}
                  change={element => this.updateForm(element)}
                />
              </div>
              <div>
                {
                    this.state.formSuccess ? 
                    <div className='form_success'>
                        Updated Successfully
                    </div>
                    :null
                }
                {
                    this.state.formError ? (
                    <div className="error_label">Please check your data</div>
                    ) : null
                }
                <button type="submit">Update Personal info</button>
              </div>
            </form>
          </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
})


export default connect(mapStateToProps)(UpdatePersonalInfo);