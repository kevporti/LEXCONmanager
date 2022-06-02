import React from 'react';
import ReactDOM from 'react-dom';

function TablaHeader(categories) {


    return(
        <div className="px-4 py-2 border-b border-lightwhite bg-dark grid grid-cols-5">
            <div className="grid place-content-start">
                Empresa
            </div>
            <div className="grid place-content-start">
                Cantidad de moras
            </div>
            <div className="grid place-content-start">
                Bruto Deuda
            </div>
            <div className="grid place-content-start">
                Deuda Final (%)
            </div>
            <div className="grid place-content-end">
                Opciones
            </div>
        </div>
    );
}

export default TablaHeader;