import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from './Path';
import style from './Header.module.css'

export const Header = () => {
    return <div className={style.Header}>
        <NavLink to={PATH.PROFILE}>Profile</NavLink>
        <NavLink to={PATH.FORGOT}>Forgot</NavLink>
        <NavLink to={PATH.LOGIN}>Login</NavLink>
        <NavLink to={PATH.REGISTER}>Register</NavLink>
    </div>
}