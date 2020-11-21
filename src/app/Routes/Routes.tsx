import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {PATH} from '../Header/Path';
import {LoginContainer} from '../../features/Auth/Login/LoginContainer';
import {RegisterContainer} from '../../features/Auth/Register/RegisterContainer';
import {ForgotContainer} from '../../features/Auth/Forgot/ForgotContainer';
import {ProfileContainer} from '../../features/Auth/Profile/ProfileContainer';
import {Switch} from 'react-router-dom';
import {SetPassContainer} from '../../features/Auth/SetPass/SetPassContainer';

export const Routes = () => {

    return <>
        <Switch>
            <Route exact path="/">
                <Redirect to={PATH.PROFILE} />
            </Route>
            <Route exact path={PATH.LOGIN} render={() => <LoginContainer/>}/>
            <Route exact path={PATH.REGISTER} render={() => <RegisterContainer/>}/>
            <Route exact path={PATH.FORGOT} render={() => <ForgotContainer/>}/>
            <Route exact path={PATH.PROFILE} render={() => <ProfileContainer/>}/>
            <Route exact path={PATH.SET_PASS+'/:token'} render={() => <SetPassContainer/>}/>
        </Switch>
    </>
}