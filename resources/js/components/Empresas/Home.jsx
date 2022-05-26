import React from 'react';
import ReactDOM from 'react-dom';
import NavSession from '../Navigation/NavSession';
import Filtros from './Filtros';
import Tabla from './Tabla';

function Home() {

    return (
        <div className="p-7 bg-darklight h-screen w-full">
            <NavSession />
            <Filtros />
            <Tabla />
        </div>
    );

}

export default Home;