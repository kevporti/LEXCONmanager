import React from 'react';
import ReactDOM from 'react-dom';
import FilaTabla from './FilaTabla';

function Tabla() {

    return (
        <div className="w-full border border-lightwhite rounded">
            <div className="px-4 py-2 border-b-2 border-lightwhite bg-dark grid grid-cols-12">
                <div className="grid place-content-start col-span-2">
                    Empresa
                </div>
                <div className="grid place-content-end col-span-3">
                    Subtotal
                </div>
                <div className="grid place-content-end col-span-3 mr-2">
                    Subtotal Patronal
                </div>
                <div className="grid place-content-end col-span-3 mr-4">
                    Total
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