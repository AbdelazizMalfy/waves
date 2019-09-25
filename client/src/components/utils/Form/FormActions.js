
export const validate = (element, formdata= []) => {
    let error = [true,''];


    if(element.validation.email){
        const valid = /\S+@\S+\.\S+/.test(element.value)
        const message = `${!valid ? 'Must be a valid email':''}`;
        error = !valid ? [valid,message] : error;
    }

    if(element.validation.confirm){
        const valid = element.value.trim() === formdata[element.validation.confirm].value;
        const message = `${!valid ? 'Passwords must match':''}`;
        error = !valid ? [valid,message] : error;
    }


    if(element.validation.required){
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field is required':''}`;
        error = !valid ? [valid,message] : error;
    }

    return error
}

export const update = (element,formdata,formName) =>{
    const newFormdata = {
        ...formdata
    }

    const newElement = {
        ...newFormdata[element.id]
    }

    newElement.value = element.e.target.value

    if(element.blur){
        let validData = validate(newElement,formdata);

        newElement.valid=validData[0];
        newElement.validationMessage=validData[1];
    }

    newElement.touch = element.blur;
    newFormdata[element.id] = newElement;

    return newFormdata;
}

export const generateData = (formdata,formName) =>{
    let dataToSubmit = {};

    for(let key in formdata){
        if(key !== 'confirmPassword'){
            dataToSubmit[key] = formdata[key].value
        }
    }

    return dataToSubmit;
}

export const isFormValid = (formdata,formName) =>{
    let formIsValid = true

    for(let key in formdata){
        formIsValid =  formdata[key].valid && formIsValid 
    }

    return formIsValid;
}

export const populateOptionFields = (formdata,dataArray,field) => {
    const newArray = [];
    const newFormdata = {...formdata};

    dataArray.forEach((brand) => {
        newArray.push({key:brand._id ,value:brand.name})
    })

    newFormdata[field].config.options = newArray;
    return newFormdata;
}


export const resetFields = (formdata, formName)=>{
    const newFormdata = {...formdata};

    for(let key in newFormdata){
        if(key === 'images'){
            newFormdata[key].value = [];
        }else{
            newFormdata[key].value = '';
        }

        newFormdata[key].valid = false;
        newFormdata[key].touched = false;
        newFormdata[key].validationMessage = '';
    }

    return newFormdata
}

export const populateFields = (formdata,userData) => {
    const newFormdata = {...formdata};

    for(let key in newFormdata){
        newFormdata[key].value = userData[key];
        newFormdata[key].valid = true;
        newFormdata[key].touched = true;
        newFormdata[key].validationMessage=''
    }
    return newFormdata;
}