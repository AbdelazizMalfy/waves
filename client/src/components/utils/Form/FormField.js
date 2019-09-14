import React from 'react'

const FormField = ({id,formdata,change}) => {

    const showError = () =>{
        let errorMessage = null;

        if(formdata.validation && !formdata.valid){
            errorMessage = ( 
                <div className='error_label'>
                    {formdata.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }


    const renderedTemplate = ()=>{
        let formTemplate = '';

        switch(formdata.element){
            case('input'):
                formTemplate = (
                    <div className='formBlock'>
                    <input 
                        {...formdata.config}
                        value={formdata.value}
                        onBlur={(e) => change({e,id,blur:true})}
                        onChange={(e) => change({e,id})}
                    />
                    {showError()}
                    </div>
                )
                break;

            default:
                formTemplate=''
        }

        return formTemplate;
    }

    return (
        <div>
            {renderedTemplate()}
        </div>
    )
}

export default FormField
