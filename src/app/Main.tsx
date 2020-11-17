import React from 'react';
import {Header} from './Header/Header';
import {Routes} from './Routes/Routes';
import style from './Main.module.css'
import {ErrorComponent} from '../components/Error/ErrorComponent';
import {useSelector} from 'react-redux';
import {selectIsInitialized, selectStatus} from './Selectors/selectors';
import {Loading} from '../components/loading/LoadingComponent';
import {useAppDispatch} from './store';

export const Main = () => {
    const isInitialized = useSelector(selectIsInitialized)
    const dispatch = useAppDispatch()
    const status = useSelector(selectStatus)

  /*  useEffect(() => {
        if(!isInitialized){
         dispatch(initializedAp())
        }
    }, [])*/

    return <div className={style.Main}>
        <Header/>
        <Routes/>
        <ErrorComponent/>
        {status === 'loading' && <Loading/>}
        {status === 'succeeded' && <div style={{color: 'green'}}>Succeeded</div>}
    </div>
}