import React, {useEffect} from 'react'
import {Login} from './Login';
import {useAppDispatch} from '../../app/store';
import { setIsRegister } from '../Auth/auth-reducer';

export const LoginContainer = React.memo(() => {
    const dispatch = useAppDispatch()
    dispatch(setIsRegister({value: false}))
    useEffect(() => {

    }, [])

    return <>
        <Login/>
    </>
})