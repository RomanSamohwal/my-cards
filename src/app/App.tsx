import './App.css';
import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Main} from './Main';

function App() {
    return (<div className="App">
            <HashRouter>
                <Main/>
            </HashRouter>
        </div>
    );
}

export default App;

