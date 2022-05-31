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
                        Rama/Categoría:  {dato.rama}
                    </div>
                    <div>
                        Simple Presencia:  ${dato.presencia}
                    </div>
                    <div>
                        Permanencia fuera Residencia:  ${dato.resid}
                    </div>
                    <div>
                        Sueldo Básico:  ${dato.basico}
                    </div>
                    <div>
                        Hs Extra 50%:  ${dato.extra50}
                    </div>
                    <div>
                        Hs Extra 100%:  ${dato.extra100}
                    </div>
                    <div className="grid place-content-start pt-4">
                        Creado por:  {dato.firma_usuario}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DatosEscala;