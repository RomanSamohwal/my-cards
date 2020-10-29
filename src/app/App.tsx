import './App.css';
import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {LoginContainer} from '../features/Login/LoginContainer';
import {RegisterContainer} from '../features/Register/RegisterContainer';
import {ForgotContainer} from '../features/Forgot/ForgotContainer';
import {ProfileContainer} from '../features/Profile/ProfileContainer';
import {PATH} from './Header/Path'

function App() {
    return (<div className="App">
            <HashRouter>
                <Route path={PATH.LOGIN} render={() => <LoginContainer/>}/>
                <Route path={PATH.REGISTER} render={() => <RegisterContainer/>}/>
                <Route path={PATH.FORGOT} render={() => <ForgotContainer/>}/>
                <Route path={PATH.PROFILE} render={() => <ProfileContainer/>}/>
            </HashRouter>
        </div>
    );
}

export default App;

