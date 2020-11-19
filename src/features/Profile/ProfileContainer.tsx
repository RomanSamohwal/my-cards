import React, {useEffect} from 'react'
import {Profile} from './Profile';
import {useAppDispatch} from '../../app/store';
import {setIsLoggedIn} from '../Login/login-reducer';
import {useSelector} from 'react-redux';
import {isAuthorized, isLogin, isLogOut, selectStatus, userId} from '../../app/Selectors/selectors';
import {initializedAp} from './profile-reducer';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../app/Header/Path';

export const ProfileContainer = React.memo(() => {
    const id = useSelector(userId)
    const isLogout = useSelector(isLogOut)
    const isAuth = useSelector(isAuthorized)
    const dispatch = useAppDispatch()
    const isLoginIn = useSelector(isLogin)
    const status = useSelector(selectStatus)

    useEffect(() => {
        console.log(id)
        if (id === '0') {
            dispatch(initializedAp())
        }
    }, [dispatch])

    if ((!isAuth && status === 'failed') || (!isAuth && isLogout)) {
        return <Redirect to={PATH.LOGIN}/>
    }

    if (isLoginIn) {
        dispatch(setIsLoggedIn({value: false}))
    }

    return <>
        <Profile/>
    </>
})