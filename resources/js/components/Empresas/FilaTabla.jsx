import React from 'react';
import ReactDOM from 'react-dom';

function FilaTabla() {
    const Empresas = [
        {name: 'Caminos', cuit: '20439831880', contact: 'Pablo Argento', country: "Canada"},
        {name: 'Samsung', cuit: '20439831880', contact: 'Notengoni Idea', country: "Uruguay"},
        {name: 'Apple', cuit: '20439831880', contact: 'Mark Zuckerberg', country: "Italia"},
        {name: 'Samsung', cuit: '20439831880', contact: 'Notengoni Idea', country: "Uruguay"},
        {name: 'Samsung', cuit: '20439831880', contact: 'Notengoni Idea', country: "Uruguay"},
        {name: 'Coca-Cola', cuit: '20439831880', contact: 'Claudio Raimundez', country: "Expaña"},
        {name: 'NASA', cuit: '20439831880', contact: 'Notengoni Idea', country: "Uruguay"},
        {name: 'Samsung', cuit: '20439831880', contact: 'Notengoni Idea', country: "Argentina"},
        {name: 'Galaxy', cuit: '20439831880', contact: 'Coldplay', country: "Uruguay"},
        {name: 'Samsung', cuit: '20439831880', contact: 'Agustin', country: "España"},
    ];

    return (
        <div className="h-96 overflow-auto scrollbar">
            {Empresas.map((empresa, index) =>(
                <div key={index} className="grid grid-cols-12 px-4 border-b border-lightwhite p-2">
                    <div className="col-span-3">
                        {empresa.cuit}
                    </div>
                    <div className="col-span-3">
                        {empresa.name}
                    </div>
                    <div className="col-span-3">
                        {empresa.contact}
                    </div>
                    <div className="grid place-content-end col-span-2">
                        {empresa.country}
                    </div>
                    <div className="grid place-content-end">
                        <i className="material-symbols-outlined cursor-pointer">expand_more</i>
                    </div>
                </div>
            ))}
            </div>
    );
}

export default FilaTabla;