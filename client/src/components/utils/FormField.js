import React from 'react'

const FormField = ({id,formdata,change}) => {

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
