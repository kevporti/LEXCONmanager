import React from 'react';
import ReactDOM from 'react-dom';
import Nav from "./Navigation/Nav";
import Aside from "./Navigation/Aside";
import Login from './Login/Login';
import Home from './Empresas/Home';

function App() {
    return (
        <>
        {/* <div className="bg-dark h-screen">
            <Nav />
            <Login />
        </div> */}
        <div className="flex text-white bg-darklight h-screen">
            <Aside />
            <Home />
        </div>
        </>
    );
}

export default App;
