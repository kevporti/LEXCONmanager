import React from 'react';
import ReactDOM from 'react-dom';

function FilaTabla() {
    const Empresas = [
        {name: 'Coca-Cola', cuit: '20439831880', contact: 'Claudio Raimundez'},
        {name: 'Caminos', cuit: '20439831880', contact: 'Pablo Argento'},
        {name: 'Coca-Cola', cuit: '20439831880', contact: 'Claudio Raimundez'},
        {name: 'Apple', cuit: '20439831880', contact: 'Mark Zuckerberg'},
        {name: 'Samsung', cuit: '20439831880', contact: 'Notengoni Idea'},
    ];

    return (
        <div className="flex justify-between px-4">
                <div>
                    20439831880
                </div>
                <div>
                    Coca-Cola
                </div>
                <div>
                    Claudio Raimundez
                </div>
                <div>
                    Arrow
                </div>
            </div>
    );
}

export default FilaTabla;