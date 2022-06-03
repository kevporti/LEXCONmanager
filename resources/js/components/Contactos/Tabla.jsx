import React from 'react';
import ReactDOM from 'react-dom';
import FilaTabla from './FilaTabla';

function Tabla() {

    return (
        <div className="w-full border border-lightwhite rounded">
            <div className="px-4 py-2 border-b-2 border-lightwhite bg-dark grid grid-cols-14">
                <div className="grid place-content-start col-span-2">
                    Empresa
                </div>
                <div className="grid place-content-start col-span-3">
                    Contacto
                </div>
                <div className="grid place-content-start col-span-2">
                    Cargo
                </div>
                <div className="grid col-span-3">
                    Teléfono
                </div>
                <div className="grid col-span-3">
                    Email
                </div>
                <div className="grid place-content-end">
                    Borrar
                </div>
            </div>
            <FilaTabla />
        </div>
    );
}

export default Tabla;