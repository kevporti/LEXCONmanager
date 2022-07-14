import React from "react";
import ReactDOM from "react-dom";
import FilaTabla from "./FilaTabla";

function Tabla() {
    return (
        <div className="w-full border border-lightwhite rounded">
            <div className="px-4 py-2 border-b-2 border-lightwhite bg-dark grid grid-cols-5">
                <div className="grid place-content-start">Empresa</div>
                <div className="grid place-content-start">Empleado</div>
                <div className="grid place-content-start">Reajuste</div>
                <div className="grid place-content-end">Fecha Liquidada</div>
                <div className="print:hidden grid place-content-end">Opciones</div>
            </div>
            <FilaTabla />
        </div>
    );
}

export default Tabla;
