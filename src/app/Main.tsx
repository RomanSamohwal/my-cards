import React from 'react';
import {Header} from './Header/Header';
import {Routes} from './Routes/Routes';
import style from './Main.module.css'

export const Main = () => {
    return <div className={style.Main}>
        <Header/>
        <Routes/>
    </div>
}