import React, {useEffect, useState} from 'react'
import {Profile} from './Profile';
import {useAppDispatch} from '../../app/store';
import {setIsLoggedIn} from '../Login/login-reducer';
import {useSelector} from 'react-redux';
import {isAuthorized, userId} from '../../app/Selectors/selectors';
import {initializedAp} from './profile-reducer';
import { Redirect } from 'react-router-dom';
import {PATH} from '../../app/Header/Path';


export const ProfileContainer = () => {
    const [firstRendering, setFirstRendering] = useState<boolean>(true);
    const [redirect, setRedirect] = useState<boolean>(false);
    const id = useSelector(userId)
    const isAuth = useSelector(isAuthorized)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setIsLoggedIn({value: false}))
        console.log(id)
        if (firstRendering) {
            if (id === '0') {
                dispatch(initializedAp())
            }
            setFirstRendering(false);
        } else {

        }
    }, [])

    if (!isAuth) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return <>
        <Profile/>
    </>
}