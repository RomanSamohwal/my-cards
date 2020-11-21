import React from 'react';
import {useFormik} from 'formik';
import style from './Formik.module.css'
import {useAppDispatch} from '../../app/store';
import {forgot} from '../../features/Auth/Forgot/forgot-thunk';

export const ForgotFormik = () => {
    const dispatch = useAppDispatch()
    const formik = useFormik({
        validate: validate,
        initialValues: initialValues,
        onSubmit: async (values: ForgotInitType) => {
            dispatch(forgot(values.email))
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
                    <button type="submit">send</button>
                </div>
            </div>
        </form>
    </>
}
//initial value
const initialValues: ForgotInitType = {
    email: ''
}


//validate
 let validate = (values: ForgotInitType) => {
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

//types
type ForgotInitType = {
    email: string
}