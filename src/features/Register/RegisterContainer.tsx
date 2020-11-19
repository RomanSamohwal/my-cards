import React from 'react'
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRootStateType, useAppDispatch} from '../../app/store';
import {PATH} from '../../app/Header/Path';
import {setAppStatus} from '../../app/app-reducer';
import {Register} from './Register';

export const RegisterContainer = () => {
    const dispatch = useAppDispatch()
    const isSignUp = useSelector<AppRootStateType>(state => state.reg.isSignUp)

    if (isSignUp) {
        dispatch(setAppStatus({status: "idle"}))
        return <Redirect to={PATH.LOGIN}/>
    }
    return <>
        <Register/>
    </>
}