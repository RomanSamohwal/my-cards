import React from 'react'
import {logOut} from './logout-reducers';
import {useAppDispatch} from '../../../app/store';
import {useSelector} from 'react-redux';
import {isLogOut} from '../../../app/Selectors/selectors';

export const Logout = React.memo(() => {
    const dispatch = useAppDispatch()
    const logout = useSelector(isLogOut)
    console.log(logout)
    const logOutHandler =  () => {
         dispatch(logOut())
    }

    return <div>
           <button onClick={logOutHandler}>Logout</button>
    </div>
})