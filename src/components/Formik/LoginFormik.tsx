import React from 'react';
import {FormikHelpers, useFormik} from 'formik';
import {FormValuesType} from './FormikTypes';
import style from './Formik.module.css'
import { login } from '../../features/Login/login-reducer';
import {useAppDispatch} from '../../app/store';

export const LoginFormik = () => {
    const dispatch = useAppDispatch()
    const formik = useFormik({
        validate: validate,
        initialValues: initialValues,
        onSubmit: async (values: any, formikHelpers: FormikHelpers<FormValuesType>) => {
            console.log(values)
            await dispatch(login({
                email: values.email,
                password: values.password,
                rememberMe: values.rememberMe
            }))
        }
    })
    return <>
        <form onSubmit={formik.handleSubmit}>
            <div className={style.form}>
                <div>
                    <input id="email" name="email" type="email" onChange={formik.handleChange}
                           value={formik.values.email}/>
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </div>
                <div>
                    <input id='password' name='password' type='password' onChange={formik.handleChange}
                           value={formik.values.password}/>
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                </div>
                <div>
                    Remember me
                    <input type="checkbox" onChange={formik.handleChange} name={"rememberMe"}/>
                </div>
                <div>
                    <button type="submit">registration</button>
                </div>
            </div>
        </form>
    </>
}
//initial value

const initialValues: FormValuesType = {
    email: '',
    password: '',
    rememberMe: false
}

//validate
 let validate = (values: FormValuesType) => {
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

