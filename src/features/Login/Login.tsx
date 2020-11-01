import React from 'react'
import {Formik, FormValuesType, InputsType} from '../../components/Formik/Formik';
import {FormikHelpers} from 'formik';



export const Login = () => {
    const inputDates: InputsType = [
        {
            id: 'email',
            name: "email",
            type: 'email',
            key: 'email_id',
        },
        {
            id: 'password',
            name: 'password',
            type: 'password',
            key: 'password_id',
        }]
    const initialValues = {
        email : '',
        password: ''
    }

    const onSubmit = (values: any, formikHelpers: FormikHelpers<FormValuesType>) => {
        alert(alert(JSON.stringify(values)))
    }

    const validate = (values:FormValuesType) => {
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

    }

    return <div>Login
      <Formik validate = {validate} initialValues={initialValues} inputDates = {inputDates} onSubmit = {onSubmit}/>
    </div>
}