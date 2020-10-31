import React from 'react';
import {Header} from './Header/Header';
import {Routes} from './Routes/Routes';
import style from './Main.module.css'
import {ErrorComponent} from '../components/Error/ErrorComponent';

export const Main = () => {
    return <div className={style.Main}>
        <Header/>
        <Routes/>
        <ErrorComponent/>
    </div>
}