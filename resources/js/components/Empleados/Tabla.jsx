import React from 'react';
import ReactDOM from 'react-dom';
import FilaTabla from './FilaTabla';

function Tabla() {

    return(
        <div>
            <div className="w-full border border-lightwhite rounded">
            <div className="px-4 py-2 border-b-2 border-lightwhite bg-dark grid grid-cols-11">
                <div className="grid place-content-start col-span-2">
                    DNI
                </div>
                <div className="grid place-content-start col-span-3">
                    Nombre Empleado
                </div>
                <div className="grid place-content-start col-span-1">
                    Empresa
                </div>
                <div className="grid place-content-end col-span-2">
                    Moras Vigentes
                </div>
                <div className="grid place-content-end col-span-2">
                    Estado
                </div>
                <div className="grid place-content-end col-span-1">
                    Eliminar
                </div>
            </div>
            <FilaTabla />
        </div>
        </div>
    );
}

export default Tabla;