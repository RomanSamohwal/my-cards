import React from 'react'
import {logOut} from './logout-reducers';
import {useAppDispatch} from '../../app/store';

export const Logout = React.memo(() => {
    const dispatch = useAppDispatch()
    const logOutHandler =  () => {
         dispatch(logOut())
    }

    return <div>
           <button onClick={logOutHandler}>Logout</button>
    </div>
})