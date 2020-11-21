import React from 'react'
import {useAppDispatch} from '../../../app/store';
import {SetPassword} from './SetPassword';

export const SetPassContainer = React.memo(() => {

    const dispatch = useAppDispatch()
    return <>
        <SetPassword/>
    </>
})