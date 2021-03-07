import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


var numberOnly = new RegExp(/^\d{10}$/)


export function ValidateProfile(data) {
    let errors = {};
    if (Validator.trim(data.name) === '') {
        errors.entityCode = 'Name  is required';
    }
 
    if (Validator.trim(data.gender) === '') {
        errors.gender = 'Gender is required';
    }
    if (Validator.trim(data.country) === '') {
        errors.states = 'Country is required';
    }
    if (Validator.trim(data.states) === '') {
        errors.states = 'States is required';
    }

    if (Validator.trim(data.phoneNumber) === '') {
        errors.phoneNumber = 'Phone number is required';
    } else if (!numberOnly.test(data.phoneNumber)) {
        errors.phoneNumber = 'Phone number is incorrect';
    }   
 
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

export function ValidateCompanyDetails(data) {
    let errors = {};
 
    if (Validator.trim(data.company) === '') {
        errors.company = 'Company name  is required';
    }
    if (Validator.trim(data.email) === "") {
        errors.email = 'Email id is required'
    } else if (!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(data.email))) {
        errors.email = 'Email not match';
    }
    if (Validator.trim(data.jobTitle) === '') {
        errors.jobTitle = 'JobTitle is required';
    }
    if (Validator.trim(data.experience) === '') {
        errors.experience = 'experience is required';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}