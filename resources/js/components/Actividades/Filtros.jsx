import React from 'react';
import ReactDOM from 'react-dom';
import Agregar from './Agregar';

function Filtros() {

    return(
        <div className="flex w-full justify-between my-8">
            <div className="flex items-center">
                <input className="bg-dark p-2" type="text" placeholder="Buscar por empresa" />
                <i className="material-symbols-outlined p-2 rounded-r bg-dark cursor-pointer">search</i>
            </div>
            <div>
                <Agregar />
            </div>
        </div>
    );
}

export default Filtros;