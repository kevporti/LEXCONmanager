import React from 'react';
import Aside from '../Navigation/Aside';
import Home from '../Empresas/Home';

function Empresas() {

    return (
        <div className="flex text-white bg-darklight h-full">
            <Aside />
            <Home />
        </div>
    );
}

export default Empresas;