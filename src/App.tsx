import './App.css';
import {authAPI} from './api/cards-api';
import React from 'react';

function App() {
    const HandleSignUp = async () => {
        try {
            await authAPI.signUp('rmohwal@gmail.com', 'reactdeveloper888')
        } catch (e) {
            console.log(e.response.data.error)
        }
    }

    const HandleAuthMe = async () => {
        try {
            let data =  await authAPI.authMe()
            console.log(data)
        } catch (e) {
            console.log(e.response.data.error)
        }
    }
   // response success
  /*  {_id: "5f949ed1d7d66426389a00a2", email: "rmohwal@gmail.com", rememberMe: true, isAdmin: false,…}
    created: "2020-10-24T21:38:25.950Z"
    email: "rmohwal@gmail.com"
    isAdmin: false
    name: "rmohwal@gmail.com"
    publicCardPacksCount: 0
    rememberMe: true
    token: "f311b910-16ec-11eb-88ce-093463d2fae2"
    tokenDeathTime: 1604254051105
    updated: "2020-10-25T18:07:31.106Z"
    verified: false
    __v: 0
    _id: "5f949ed1d7d66426389a00a2"    */
    const HandleLogin = async () => {
        try {
            let data =  await authAPI.login('rmohwal@gmail.com', 'reactdeveloper888', true)
            console.log(data)
        } catch (e) {
            console.log(e.response.data.error)
        }
    }

//response success
    /*    _id: "5f949ed1d7d66426389a00a2", email: "rmohwal@gmail.com", rememberMe: true, isAdmin: false,…}
created: "2020-10-24T21:38:25.950Z"
email: "rmohwal@gmail.com"
isAdmin: false
name: "rmohwal@gmail.com"
publicCardPacksCount: 0
rememberMe: true
token: "ac0e66d0-16ec-11eb-88ce-093463d2fae2"
tokenDeathTime: 1604253931965
updated: "2020-10-25T18:05:31.967Z"
verified: false
__v: 0
_id: "5f949ed1d7d66426389a00a2"*/

    const HandleLogOut = async () => {
        try {
            let data =  await authAPI.logout()
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


/*
data: "{"email":"rmohwal@gmail.com","password":"reactdeveloper888"}*/
