import React from 'react'
import {useSelector} from 'react-redux';
import { setAppStatus } from '../../app/app-reducer';
import {AppRootStateType, useAppDispatch} from '../../app/store';

export const ErrorComponent = React.memo(() => {
    const error = useSelector<AppRootStateType, string | null>(state => state.app.error);
    const dispatch = useAppDispatch()
    dispatch(setAppStatus({status: 'idle'}))
    return <>
        <div style={{color: 'red'}}>
            {error}
        </div>
    </>
})