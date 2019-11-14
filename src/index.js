import './sass/bootstrap/scss/bootstrap.scss';
import './sass/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./pages/home";

ReactDOM.render(
    <Home title="Given title where instantiated, in `index.js`"></Home>,
    document.getElementById('root')
)