import React from 'react';
import ReactDOM from 'react-dom';
import FilaTabla from './FilaTabla';

function Content() {
    
    return(
        <div className="p-4">
            <h1 className="text-2xl my-2">
                Resumen Mensual
            </h1>
            <div className="w-full border border-lightwhite rounded">
                <div className="px-4 py-2 border-b-2 border-lightwhite bg-dark grid grid-cols-9">
                    <div className="grid place-content-start col-span-2">
                        Fecha
                    </div>
                    <div className="grid place-content-start col-span-3">
                        Empresa
                    </div>
                    <div className="grid place-content-start col-span-3">
                        Deudas a Cobrar
                    </div>
                    <div className="grid place-content-end">
                        Deuda Cobrada
                    </div>
                </div>
                <FilaTabla />
            </div>
        </div>
    );
}

export default Content;