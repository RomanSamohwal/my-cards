import './App.css';
import {authAPI} from '../api/cards-api';
import React from 'react';

function App() {
    const HandleSignUp = async () => {
        try {
            await authAPI.signUp({email: 'rmohwal@gmail.com', password: 'reactdeveloper888'})
        } catch (e) {
            console.log(e.response.data.error)
        }
    }

    const HandleAuthMe = async () => {
        try {
            let data = await authAPI.authMe()
            console.log(data)
        } catch (e) {
            console.log(e.response.data.error)
        }
    }

    const HandleLogin = async () => {
        try {
            let data = await authAPI.login({
                email: 'rmohwal@gmail.com',
                password: 'reactdeveloper888',
                rememberMe: true
            })
            console.log(data)
        } catch (e) {
            console.log(e.response.data.error)
        }
    }


    const HandleLogOut = async () => {
        try {
            let data = await authAPI.logout()
            console.log(data)
        } catch (e) {
            console.log(e.response.data.error)
        }
    }

    return (<div className="App">
            <button onClick={HandleSignUp}>Reg</button>
            <button onClick={HandleLogin}>login</button>
            <button onClick={HandleAuthMe}>AuthMe</button>
            <button onClick={HandleLogOut}>logOut</button>
        </div>
    );
}

export default App;

