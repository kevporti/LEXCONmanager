import React from 'react';
import ReactDOM from 'react-dom';

function FilaTabla() {
    const Moras = [
        {company: 'Caminos', idMora: '1', name: 'Pablo Argento', date: "10/20"},
        {company: 'Samsung', idMora: '2', name: 'Notengoni Idea', date: "11/20"},
        {company: 'Apple', idMora: '3', name: 'Mark Zuckerberg', date: "12/20"},
        {company: 'Samsung', idMora: '4', name: 'Notengoni Idea', date: "01/21"},
        {company: 'Samsung', idMora: '5', name: 'Notengoni Idea', date: "02/21"},
        {company: 'Coca-Cola', idMora: '6', name: 'Claudio Raimundez', date: "03/21"},
        {company: 'NASA', idMora: '7', name: 'Notengoni Idea', date: "09/20"},
        {company: 'Samsung', idMora: '8', name: 'Notengoni Idea', date: "10/20"},
        {company: 'Galaxy', idMora: '9', name: 'Coldplay', date: "11/20"},
        {company: 'Samsung', idMora: '10', name: 'Agustin', date: "12/20"},
    ];

    return(
        <div className="h-80 overflow-auto scrollbar">
            {Moras.map((empresa, index) =>(
                <div key={index} className="grid grid-cols-12 px-4 border-b border-lightwhite p-2">
                    <div className="col-span-2">
                        {empresa.idMora}
                    </div>
                    <div className="col-span-3">
                        {empresa.name}
                    </div>
                    <div className="col-span-3">
                        {empresa.company}
                    </div>
                    <div className="grid place-content-start col-span-3">
                        {empresa.date}
                    </div>
                    <div className="grid place-content-end">
                        <i className="material-symbols-outlined cursor-pointer text-red-500">delete</i>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FilaTabla;