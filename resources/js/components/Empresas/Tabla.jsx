import React from 'react';
import ReactDOM from 'react-dom';
import FilaTabla from './FilaTabla';

function Tabla() {

    return (
        <div className="w-full border border-lightwhite rounded">
            <div className="flex justify-between px-4 py-2 border-b border-lightwhite bg-lightwhite">
                <div className="">
                    CUIT
                </div>
                <div className="">
                    Empresa
                </div>
                <div className="">
                    Contacto
                </div>
                <div className="">
                    Opciones
                </div>
            </div>
            <FilaTabla />
        </div>
    );
}

export default Tabla;