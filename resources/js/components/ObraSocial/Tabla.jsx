import React from "react";
import ReactDOM from "react-dom";
import FilaTabla from "./FilaTabla";

function Tabla() {
    return (
        <div className="w-full border border-lightwhite rounded">
            <div className="px-4 py-2 border-b-2 border-lightwhite bg-dark grid grid-cols-12 print:text-black print:text-lg print:grid print:grid-cols-11 print:font-medium">
                <div className="grid place-content-start col-span-2">
                    Empresa
                </div>
                <div className="grid place-content-end col-span-3">
                    Subtotal
                </div>
                <div className="grid place-content-end col-span-3 mr-2">
                    Subtotal Patronal
                </div>
                <div className="grid place-content-end col-span-3 mr-4 print:mr-0">
                    Total sin Intereses
                </div>
                <div className="grid place-content-end print:hidden">
                    Opciones
                </div>
            </div>
            <FilaTabla />
        </div>
    );
}

export default Tabla;
