import React from 'react';
import {Header} from './Header/Header';
import {Routes} from './Routes/Routes';
import style from './Main.module.css'
import {ErrorComponent} from '../components/Error/ErrorComponent';
import {useSelector} from 'react-redux';
import {info, selectStatus} from './Selectors/selectors';
import {Loading} from '../components/loading/LoadingComponent';
import {Success} from '../components/Success/Success';
import {Info} from '../components/Info/Info';

export const Main = () => {
    const status = useSelector(selectStatus)
    const information = useSelector(info);

    return <div className={style.Main}>
        <Header/>
        <Routes/>
        <ErrorComponent/>
           {status === 'loading' && <Loading/>}
           {status === 'succeeded' && <Success/>}
           {information && <Info/>}
    </div>
}