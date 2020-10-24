import './App.css';
import {cardsAPI} from './api/cards-api';
import React from 'react';

function App() {
    const HandleSignUp = async () => {
        try {
            await cardsAPI.signUp('rmohwal@gmail.com', 'reactdeveloper888')
        } catch (e) {
            console.log(e.response.data.error)
        }
    }


    return (<div className="App">
         <button onClick={HandleSignUp}>Add</button>
        </div>
    );
}

export default App;


/*
data: "{"email":"rmohwal@gmail.com","password":"reactdeveloper888"}*/
