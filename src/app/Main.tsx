import React, {useEffect} from 'react';
import {Header} from './Header/Header';
import {Routes} from './Routes/Routes';
import style from './Main.module.css'
import {ErrorComponent} from '../components/Error/ErrorComponent';
import {useSelector} from 'react-redux';
import {selectIsInitialized, selectStatus} from './Selectors/selectors';
import {Loading} from '../components/loading/LoadingComponent';
import {useAppDispatch} from './store';
import {initializedAp, setAppStatus} from './app-reducer';
import {Redirect} from 'react-router-dom';
import {PATH} from './Header/Path';

export const Main = () => {
    const isInitialized = useSelector(selectIsInitialized)
    const dispatch = useAppDispatch()
    const status = useSelector(selectStatus)

    useEffect(() => {
        if(!isInitialized){
         dispatch(initializedAp())
        }
    }, [])

/*
    if (!isInitialized) {
        return <Redirect to={PATH.LOGIN}/>
    }
*/

    return <div className={style.Main}>
        <Header/>
        <Routes/>
        <ErrorComponent/>
        {status === 'loading' && <Loading/>}
        {status === 'succeeded' && <div style={{color: 'green'}}>Succeeded</div>}
    </div>
}