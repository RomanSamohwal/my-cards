import React from 'react'
import {LoginFormik} from '../../components/Formik/LoginFormik';
import {PATH} from '../../app/Header/Path';
import {NavLink} from 'react-router-dom';

export const Login = React.memo(() => {
    return <div>Login
        <LoginFormik/>
        <NavLink to={PATH.REGISTER}>Register</NavLink>
    </div>
})