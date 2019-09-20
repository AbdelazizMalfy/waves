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
                        {
                            formdata.showlabel ? 
                            <div className='label_inputs'>{formdata.config.label}</div>
                            : null
                        }
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
            case('textarea'):
                formTemplate = (
                    <div className='formBlock'>
                        {
                            formdata.showlabel ? 
                            <div className='label_inputs'>{formdata.config.label}</div>
                            : null
                        }
                    <textarea  
                        {...formdata.config}
                        value={formdata.value}
                        onBlur={(e) => change({e,id,blur:true})}
                        onChange={(e) => change({e,id})}
                    />
                    {showError()}
                    </div>
                )
            break;
            case('select'):
                formTemplate = (
                    <div className='formBlock'>
                        {
                            formdata.showlabel ? 
                            <div className='label_inputs'>{formdata.config.label}</div>
                            : null
                        }
                    <select 
                        value={formdata.value}
                        onBlur={(e) => change({e,id,blur:true})}
                        onChange={(e) => change({e,id})}
                    >
                        <option value=''>Choose one</option>
                        {
                            formdata.config.options.map(item=>(
                                <option 
                                    key={item.key}
                                    value={item.key} >
                                    {item.value}
                                </option>
                            ))
                        }
                    </select>
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
