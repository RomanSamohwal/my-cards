import React from 'react';
import {FormikHelpers, useFormik} from 'formik';
import {login} from '../../features/Auth/auth-reducer';
import {useAppDispatch} from '../../app/store';

export const LoginFormik = React.memo(() => {
    const dispatch = useAppDispatch()
    const formik = useFormik({
        validate: validate,
        initialValues: initialValues,
        onSubmit: async (values: any, formikHelpers: FormikHelpers<FormValuesType>) => {
            alert(values)
            const action = await dispatch(login({
                email: values.email,
                password: values.password,
                rememberMe: values.rememberMe
            }))
        }
    })

    return <form onSubmit={formik.handleSubmit}>
        <div style={{
            height: '150px',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'space-around', alignItems: 'center'
        }}>
            <div>
                <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email}/>
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
                <button type="submit">sign up</button>
            </div>
        </div>
    </form>
})
//initial value
export const initialValues: FormValuesType = {
    email: '',
    password: '',
    rememberMe: false
}
//validate
export const validate = (values: FormValuesType) => {
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
//types
export type InputDateType = {
    id: string
    name: string
    type: string
    key: string
}
export type InputsType = Array<InputDateType>
export type FormValuesType = {
    email: string,
    password: string,
    password_confirm?: string
    rememberMe?: boolean
}