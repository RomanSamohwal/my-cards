import React, {useEffect} from 'react'
import {Login} from './Login';
import {AppRootStateType, useAppDispatch} from '../../app/store';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../app/Header/Path';
import {setIsRegister} from '../Register/register-reducer';

export const LoginContainer = React.memo(() => {
    const dispatch = useAppDispatch()
    const isSignUp = useSelector<AppRootStateType>(state => state.reg.isSignUp)

    useEffect(() => {
        if (isSignUp) {
            dispatch(setIsRegister({value: false}))
        }
    }, [])

    const isLoggedIn = useSelector<AppRootStateType>(state => state.login.isLoggedIn)

    if (isLoggedIn) {
        return <Redirect to={PATH.PROFILE}/>
    }
    return <>
        <Login/>
    </>
})