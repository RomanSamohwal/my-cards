import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from './Path';

export const Header = () => {

    return <div>
        <NavLink to={PATH.REGISTER}>Register</NavLink>
        <NavLink to={PATH.LOGIN}>Login</NavLink>
        <NavLink to={PATH.FORGOT}>Forgot</NavLink>
        <NavLink to={PATH.PROFILE}>Profile</NavLink>
    </div>
}