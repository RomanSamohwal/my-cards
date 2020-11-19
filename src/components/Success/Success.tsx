import React from 'react'
import { setAppStatus } from '../../app/app-reducer';
import {useAppDispatch} from '../../app/store';

export const Success = React.memo(() => {
    const dispatch = useAppDispatch()

    setTimeout(()=>{
        dispatch(setAppStatus({status: 'idle'}))
    },2000)
    return <>
        <div style={{color: 'green'}}>
           Success
        </div>
    </>
})