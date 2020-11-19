import React from 'react'
import { setAppError } from '../../app/app-reducer';
import {useAppDispatch} from '../../app/store';

export const Loading = React.memo(() => {
    const dispatch = useAppDispatch()
    dispatch(setAppError({error: null}))
    return <>
        <div style={{color: 'blue'}}>
           loading...
        </div>
    </>
})