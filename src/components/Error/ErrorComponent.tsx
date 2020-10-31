import React from 'react'
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../app/store';

export const ErrorComponent = React.memo(() => {
    const error = useSelector<AppRootStateType, string | null>(state => state.app.error);

    return <>
        <div style={{color: 'red'}}>
            {error}
        </div>
    </>
})