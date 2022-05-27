import React from 'react';
import ReactDOM from 'react-dom';
import Aside from '../Navigation/Aside';
import Home from '../Empleados/Home';

function Empleados() {

    return (
        <div className="flex text-white bg-darklight h-screen">
            <Aside />
            <Home />
        </div>
    );
}


export default Empleados;