import React, {useState} from 'react'
import {FormikHelpers, useFormik} from 'formik';
import {signUp} from '../Auth/auth-reducer';
import {useAppDispatch} from '../../app/store';

type FormValuesType = {
    email: string,
    password: string,
    password_confirm: string
}

export const Register = () => {
    const [disable, setDisable] = useState<boolean>(true)
    const dispatch = useAppDispatch()
    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                setDisable(true)
                return {
                    email: 'Email is required'
                }
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                setDisable(true)
                return {
                    email: 'Invalid email address'
                }
            }
            if (!values.password) {
                setDisable(true)
                return {
                    password: 'Password is required'
                }
            } else if (values.password.length < 8) {
                setDisable(true)
                return {
                    password: 'password must be more than 7 characters'
                }
            }

            if (!values.password_confirm) {
                setDisable(true)
                return {
                    password_confirm: 'confirm your password'
                }
            }
            if (values.password !== values.password_confirm) {
                setDisable(true)
                return {
                    password_confirm: 'The entered password is incorrect'
                }
            } else {
                setDisable(false)
            }
        },
        initialValues: {
            email: '',
            password: '',
            password_confirm: ''
        },
        onSubmit: async (values, formikHelpers: FormikHelpers<FormValuesType>) => {
         const action = await dispatch(signUp({email: values.email, password: values.password }))
            debugger;
        /* formikHelpers.setFieldError('email', 'fake error')*/
        },
    });

    return <>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Enter your mail and password</label>
            <div style={{
                height: '150px',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'space-around', alignItems: 'center'
            }}>
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


