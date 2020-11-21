import React, {useState} from 'react';
import {useAppDispatch} from '../../app/store';
import {useFormik} from 'formik';
import { useParams } from 'react-router-dom';
import {setNewPass} from '../../features/Auth/SetPass/set-pas-thunk';

export const SetPasswordFormik = () => {
    // @ts-ignore
    let {token} = useParams()
    const [disable, setDisable] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const formik = useFormik({
        validate: validate,
        initialValues: initialValues,
        onSubmit: async (values) => {
            setDisable(true)
            await dispatch(setNewPass({password: values.password, resetPasswordToken: token}))
            alert(JSON.stringify(values))
            setDisable(false)
        },
    });
    return <>
        <form onSubmit={formik.handleSubmit}>
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
                <button type="submit" disabled={disable}>set pas</button>
            </div>
        </form>
    </>
}

//initial value
type SetPassType = {
    password: string
    password_confirm: string
}
const initialValues: SetPassType = {
    password: '',
    password_confirm: ''
}
//validate
export const validate = (values: SetPassType) => {
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

