import React from 'react'
import {InputsType, LoginFormik} from '../../components/Formik/Formik';
import {useAppDispatch} from '../../app/store';

export const Login = () => {
    const dispatch = useAppDispatch()

    return <div>Login
        <LoginFormik/>
    </div>
}