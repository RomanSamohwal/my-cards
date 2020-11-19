import React from 'react'
import {useSelector} from 'react-redux';
import { setInfo } from '../../app/app-reducer';
import {info} from '../../app/Selectors/selectors';
import {useAppDispatch} from '../../app/store';

export const Info = React.memo(() => {
    const information = useSelector(info);
    const dispatch = useAppDispatch()
    setTimeout(() => {
        dispatch(setInfo({info: ''}))
    }, 2000)

    return <>
        <div style={{color: 'green'}}>
            {information}
        </div>
    </>
})