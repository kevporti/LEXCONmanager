import React from 'react';
import ReactDOM from 'react-dom';

function DatosEscala(index) {

    const Datos = [
        {id: "1", rama: "Conductor", firma_usuario: "Claudio"}
    ]

    return(
        <div className="grid grid-cols-4">
            <div>
                Rama/Categoría: Conductor Primera Categoria
            </div>
            <div>
                {index.index}
            </div>
            <div>
                {index.index}
            </div>
            <div>
                Modificado por: Claudio
            </div>
        </div>
    );
}

export default DatosEscala;