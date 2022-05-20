import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "./Nav";
import Login from './Login/Login';

function App() {
    return (
        <div className="px-8 bg-dark min-h-4/5 h-screen">
            <Nav />
            <Login />
        </div>
    );
}

export default App;
