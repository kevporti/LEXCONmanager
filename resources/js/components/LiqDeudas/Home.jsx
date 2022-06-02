import React from 'react';
import ReactDOM from 'react-dom';
import NavSession from '../Navigation/NavSession';
import Tabla from './Tabla';

function Home() {

    return(
        <div className="p-8 bg-darklight h-full w-full px-20">
            <NavSession />
            <Tabla />
        </div>
    );
}

export default Home;