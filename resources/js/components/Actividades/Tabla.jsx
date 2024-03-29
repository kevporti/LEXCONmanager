import React from 'react';
import ReactDOM from 'react-dom';
import FilaTabla from './FilaTabla';

function Tabla() {

    return(
        <div className="w-full border border-lightwhite rounded">
            <div className="px-4 py-2 border-b-2 border-lightwhite bg-dark grid grid-cols-11">
                <div className="grid place-content-start col-span-3">
                    Empresa
                </div>
                <div className="grid place-content-start col-span-3">
                    Contacto
                </div>
                <div className="grid place-content-start col-span-3">
                    Estado
                </div>
                <div className="grid place-content-end mr-4">
                    Fecha
                </div>
                <div className="grid place-content-end">
                    Opciones
                </div>
            </div>
            <FilaTabla />
        </div>
    );
}

export default Tabla;