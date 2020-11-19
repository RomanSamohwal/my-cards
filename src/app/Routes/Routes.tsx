import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {PATH} from '../Header/Path';
import {LoginContainer} from '../../features/Login/LoginContainer';
import {RegisterContainer} from '../../features/Register/RegisterContainer';
import {ForgotContainer} from '../../features/Forgot/ForgotContainer';
import {ProfileContainer} from '../../features/Profile/ProfileContainer';
import {Switch} from 'react-router-dom';

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
        </Switch>
    </>
}