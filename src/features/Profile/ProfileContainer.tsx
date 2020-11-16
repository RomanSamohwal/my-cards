import React from 'react'
import {Profile} from './Profile';
import {useAppDispatch} from '../../app/store';
import {setIsLoggedIn} from '../Auth/auth-reducer';

export const ProfileContainer = () => {
    const dispatch = useAppDispatch()
    dispatch(setIsLoggedIn({value: false}))



    return <>
        <Profile/>
    </>
}