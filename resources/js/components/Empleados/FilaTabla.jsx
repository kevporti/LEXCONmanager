import React from 'react';
import ReactDOM from 'react-dom';

function FilaTabla() {
    const Empleados = [
        {company: 'Caminos', dni: '43983188', name: 'Pablo Argento', state: "Inactivo", moras: '16'},
        {company: 'Samsung', dni: '43983188', name: 'Notengoni Idea', state: "Activo", moras: '8'},
        {company: 'Apple', dni: '43983188', name: 'Mark Zuckerberg', state: "Inactivo", moras: '24'},
        {company: 'Samsung', dni: '43983188', name: 'Notengoni Idea', state: "Activo", moras: '2'},
        {company: 'Samsung', dni: '43983188', name: 'Notengoni Idea', state: "Activo", moras: '26'},
        {company: 'Coca-Cola', dni: '43983188', name: 'Claudio Raimundez', state: "Inactivo", moras: '1'},
        {company: 'NASA', dni: '43983188', name: 'Notengoni Idea', state: "Activo", moras: '15'},
        {company: 'Samsung', dni: '43983188', name: 'Notengoni Idea', state: "Inactivo", moras: '22'},
        {company: 'Galaxy', dni: '43983188', name: 'Coldplay', state: "Activo", moras: '2'},
        {company: 'Samsung', dni: '43983188', name: 'Agustin', state: "Inactivo", moras: '12'},
        {company: 'Samsung', dni: '43983188', name: 'Notengoni Idea', state: "Activo", moras: '2'},
        {company: 'Coca-Cola', dni: '43983188', name: 'Claudio Raimundez', state: "Inactivo", moras: '14'},
        {company: 'Apple', dni: '43983188', name: 'Notengoni Idea', state: "Inactivo", moras: '18'},
        {company: 'Samsung', dni: '43983188', name: 'Michelle ', state: "Activo", moras: '17'},
        {company: 'Notepadd', dni: '43983188', name: 'Pablo Abrate', state: "Activo", moras: '7'},
    ];

    return (
        <div className="h-96 overflow-auto scrollbar">
            {Empleados.map((empleado, index) =>(
                <div key={index} className="grid grid-cols-11 px-4 border-b border-lightwhite p-2">
                    <div className="col-span-2">
                        {empleado.dni}
                    </div>
                    <div className="col-span-3">
                        {empleado.name}
                    </div>
                    <div className="col-span-1">
                        {empleado.company}
                    </div>
                    <div className="grid place-content-end col-span-2">
                        <h1 className="">{empleado.moras}</h1>
                    </div>
                    <div className="grid place-content-end col-span-2">
                        <div className="flex items-center">
                            <div>
                                {empleado.state}
                            </div>
                            <div className={["w-2 h-2 rounded-full ml-4", empleado.state == "Activo" ? "bg-green-500" : "bg-red-500"].join(" ")}></div>
                        </div>
                    </div>
                    <div className="grid place-content-end col-span-1">
                        <i className="material-symbols-outlined cursor-pointer">delete</i>
                    </div>
                </div>
            ))}
            </div>
    );
}

export default FilaTabla;