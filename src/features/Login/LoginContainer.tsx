import React, {useEffect} from 'react'
import {Login} from './Login';
import {AppRootStateType, useAppDispatch} from '../../app/store';
import { setIsRegister } from '../Auth/auth-reducer';
import {useSelector} from 'react-redux';
import {setAppStatus} from '../../app/app-reducer';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../app/Header/Path';

export const LoginContainer = React.memo(() => {
    const dispatch = useAppDispatch()
    const isSignUp = useSelector<AppRootStateType>(state => state.auth.isSignUp)

    useEffect(() => {
        if (isSignUp) {
            dispatch(setIsRegister({value: false}))
        }
    }, [])


    const isLoggedIn = useSelector<AppRootStateType>(state => state.auth.isLoggedIn)

    if (isLoggedIn) {
        dispatch(setAppStatus({status: "idle"}))
        return <Redirect to={PATH.PROFILE}/>
    }
    return <>
        <Login/>
    </>
})