import React from 'react'
import {setAppError, setAppStatus} from '../../app/app-reducer';
import {useAppDispatch} from '../../app/store';

export const Loading = React.memo(() => {
    const dispatch = useAppDispatch()
    dispatch(setAppError({error: null}))
    dispatch(setAppStatus({status: "idle"}))
    return <>
        <div style={{color: 'red'}}>
           lading...
        </div>
    </>
})