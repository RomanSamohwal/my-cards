import React from 'react'
import {Redirect} from 'react-router-dom';
import {Register} from './Register';
import {useSelector} from 'react-redux';
import {AppRootStateType, useAppDispatch} from '../../app/store';
import {PATH} from '../../app/Header/Path';
import {setAppStatus} from '../../app/app-reducer';

export const RegisterContainer = () => {
    const dispatch = useAppDispatch()
    const isSignUp = useSelector<AppRootStateType>(state => state.auth.isSignUp)

    if (isSignUp) {
        dispatch(setAppStatus({status: "idle"}))
        return <Redirect to={PATH.LOGIN}/>
    }
    return <>
        <Register/>
    </>
}