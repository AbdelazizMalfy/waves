import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormField from '../../utils/Form/FormField';
import { update , generateData , isFormValid , populateFields } from '../../utils/Form/FormActions'

class UpdateSiteInfo extends Component {

    state = {
        formError:false,
        formSuccess:false,
        formdata:{
            address:{
                element: 'input',
                value:'',
                config:{
                    label:'Address',
                    name:'address_input',
                    type:'text',
                    placeholder:'Enter the site address'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:'',
                showlabel:true
            },   
            hours:{
                element: 'input',
                value:'',
                config:{
                    label:'working hours',
                    name:'hours_input',
                    type:'text',
                    placeholder:'Enter the site working hours'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:'',
                showlabel:true
            }, 
            phone:{
                element: 'input',
                value:'',
                config:{
                    label:'Phone number',
                    name:'phone_input',
                    type:'text',
                    placeholder:'Enter the site phone number'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:'',
                showlabel:true
            },
            email:{
                element: 'input',
                value:'',
                config:{
                    label:'Site Email',
                    name:'shop_email_input',
                    type:'text',
                    placeholder:'Enter the site Email'
                },
                validation:{
                    required:true,
                    email:true
                },
                valid:false,
                touched:false,
                validationMessage:'',
                showlabel:true
            }
            
        }
    }


    onSubmitForm = e =>{
        e.preventDefault();

        let dataToSubmit = generateData(this.state.formdata,'site_info')
        let formIsValid = isFormValid(this.state.formdata,'site_info')

        if(formIsValid){
            console.log(dataToSubmit);
        }else {
            this.setState({
                formError:true
            })
        }
    }



    updateForm = element => {
        const newFormdata = update(element,this.state.formdata,'site_info');
        this.setState({
            formError:false,
            formdata: newFormdata
        })
    }


    render() {
        return (
          <div>
            <h2>Site Information</h2>
            <form onSubmit={e => this.onSubmitForm(e)}>
              <FormField
                id={"address"}
                formdata={this.state.formdata.address}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={"hours"}
                formdata={this.state.formdata.hours}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={"phone"}
                formdata={this.state.formdata.phone}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={"email"}
                formdata={this.state.formdata.email}
                change={element => this.updateForm(element)}
              />

              <div>
                {this.state.formSuccess ? (
                  <div className="form_success">Updated Successfully</div>
                ) : null}
                {this.state.formError ? (
                  <div className="error_label">Please check your data</div>
                ) : null}
                <button type="submit">Update Site info</button>
              </div>
            </form>
          </div>
        );
    }
}

const mapStateToPorps = state => ({
    site: state.site
})
export default connect(mapStateToPorps)(UpdateSiteInfo);