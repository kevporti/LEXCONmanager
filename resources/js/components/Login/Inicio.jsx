import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../Navigation/Nav';
import Login from './Login';

function Inicio() {
    return (
        <div className="bg-dark h-screen">
            <Nav />
            <Login />
        </div>
    );
}


export default Inicio;