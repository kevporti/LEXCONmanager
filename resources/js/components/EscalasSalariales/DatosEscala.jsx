import React from 'react';
import ReactDOM from 'react-dom';

function DatosEscala(index) {

    const Datos = [
        {id: "6", rama: "Conductor", firma_usuario: "Claudio", basico: "50000", extra50: "750", extra100: "1000", presencia: "1500", resid: "1500"},
        {id: "5", rama: "Conductor", firma_usuario: "Claudio", basico: "50000", extra50: "750", extra100: "1000", presencia: "1500", resid: "1500"},
        {id: "4", rama: "Conductor", firma_usuario: "Claudio", basico: "50000", extra50: "750", extra100: "1000", presencia: "1500", resid: "1500"},
        {id: "3", rama: "Conductor", firma_usuario: "Claudio", basico: "50000", extra50: "750", extra100: "1000", presencia: "1500", resid: "1500"},
        {id: "2", rama: "Conductor", firma_usuario: "Claudio", basico: "50000", extra50: "750", extra100: "1000", presencia: "1500", resid: "1500"},
        {id: "1", rama: "Conductor", firma_usuario: "Claudio", basico: "50000", extra50: "750", extra100: "1000", presencia: "1500", resid: "1500"},
    ]

    return(
        <div>
            {Datos.map((dato) => (
                <div key={dato.id} className="grid grid-cols-3 gap-y-2 p-4 border-b border-lightwhite whitespace-pre-line">
                    <div>
                        <div className="flex">
                            <p>Sueldo Básico:</p>
                            <p className="ml-2 font-light">${dato.basico}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <p>Hs Extra 50%:</p>
                            <p className="ml-2 font-light">${dato.extra50}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <p>Hs Extra 100%:</p>
                            <p className="ml-2 font-light">${dato.extra100}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <p>Rama/Categoría:</p>
                            <p className="ml-2 font-light">{dato.rama}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <p>Simple Presencia:</p>
                            <p className="ml-2 font-light">${dato.presencia}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <p>Permanencia fuera Residencia:</p>
                            <p className="ml-2 font-light">${dato.resid}</p>
                        </div>
                    </div>
                    <div className="grid place-content-start pt-4">
                        <div className="flex">
                            <p>Creado por:</p>
                            <p className="ml-2 font-light">{dato.firma_usuario}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DatosEscala;