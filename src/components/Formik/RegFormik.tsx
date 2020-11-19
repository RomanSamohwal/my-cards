import React, {useState} from 'react';
import {useAppDispatch} from '../../app/store';
import {FormikHelpers, useFormik} from 'formik';
import {signUp} from '../../features/Register/register-reducer';
import {validate} from './FormikValidate';
import {FormValuesType} from './FormikTypes';
import style from './Formik.module.css'

export const RegisterFormik = () => {
    const [disable, setDisable] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const formik = useFormik({
        validate: validate,
        initialValues: initialValues,
        onSubmit: async (values, formikHelpers: FormikHelpers<FormValuesType>) => {
            setDisable(true)
            await dispatch(signUp({email: values.email, password: values.password}))
            setDisable(false)
        },
    });
    return <>
        <form onSubmit={formik.handleSubmit}>

            <div className={style.form}>
                <div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </div>
                <div>
                    <input
                        id='password'
                        name='password'
                        type='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                </div>
                <div>
                    <input
                        id='password_confirm'
                        name='password_confirm'
                        type='password'
                        onChange={formik.handleChange}
                        value={formik.values.password_confirm}
                    />
                    {formik.errors.password_confirm ? <div>{formik.errors.password_confirm}</div> : null}
                </div>
                <div>
                    <button type="submit" disabled={disable}>sign up</button>
                </div>
            </div>
        </form>
    </>
}

//initial value
const initialValues: FormValuesType = {
    email: '',
    password: '',
    password_confirm: ''
}