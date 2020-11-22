import {FormValuesType} from './FormikTypes';

export const validate = (values: FormValuesType) => {

    /*return emailValidation(values)
    return passwordValidation(values)
    return passwordConfirmValidation(values)*/

     if (!values.email) {
        return {
            email: 'Email is required'
        }
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        return {
            email: 'Invalid email address'
        }
    }
    if (!values.password) {
        return {
            password: 'Password is required'
        }
    } else if (values.password.length < 8) {
        return {
            password: 'password must be more than 7 characters'
        }
    }
    if (!values.password_confirm) {
        return {
            password_confirm: 'confirm your password'
        }
    }
    if (values.password !== values.password_confirm) {
        return {
            password_confirm: 'The entered password is incorrect'
        }
    }
}


export const emailValidation  = (values: FormValuesType) =>{
    if (!values.email) {
        return {
            email: 'Email is required'
        }
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        return {
            email: 'Invalid email address'
        }
    }
}
export const passwordValidation = (values: FormValuesType) => {
    if (!values.password) {
        return {
            password: 'Password is required'
        }
    } else if (values.password.length < 8) {
        return {
            password: 'password must be more than 7 characters'
        }
    }
}
export const passwordConfirmValidation = (values: FormValuesType) => {
    if (!values.password_confirm) {
        return {
            password_confirm: 'confirm your password'
        }
    }
    if (values.password !== values.password_confirm) {
        return {
            password_confirm: 'The entered password is incorrect'
        }
    }
}