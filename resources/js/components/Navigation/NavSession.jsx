import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown/Dropdown';


function NavSession() {

    return (
        <div className="flex w-full justify-between items-center pb-8 border-b border-lightwhite">
            <div>
                <h1 className="text-2xl">
                Sección Empresas
                </h1>
            </div>
            <Dropdown />
        </div>
    );
}


export default NavSession;