import React from 'react';
import ReactDOM from 'react-dom';
import { Disclosure } from '@headlessui/react';
import DatosEmpleado from './DatosEmpleado';

function FilaTabla() {
    const Empleados = [
        { id: 10, company: 'Coca-Cola', dni: '43983188', name: 'Claudio Raimundez', tel: "+54 9 341 3349561", moras: '1'},
        { id: 9, company: 'NASA', dni: '43983188', name: 'Notengoni Idea', tel: "+54 9 341 3349561", moras: '15'},
        { id: 8, company: 'Samsung', dni: '43983188', name: 'Notengoni Idea', tel: "+54 9 341 3349561", moras: '22'},
        { id: 7, company: 'Galaxy', dni: '43983188', name: 'Coldplay', tel: "+54 9 341 3349561", moras: '2'},
        { id: 6, company: 'Samsung', dni: '43983188', name: 'Agustin', tel: "+54 9 341 3349561", moras: '12'},
        { id: 5, company: 'Samsung', dni: '43983188', name: 'Notengoni Idea', tel: "+54 9 341 3349561", moras: '2'},
        { id: 4, company: 'Coca-Cola', dni: '43983188', name: 'Claudio Raimundez', tel: "+54 9 341 3349561", moras: '14'},
        { id: 3, company: 'Apple', dni: '43983188', name: 'Notengoni Idea', tel: "+54 9 341 3349561", moras: '18'},
        { id: 2, company: 'Samsung', dni: '43983188', name: 'Michelle ', tel: "+54 9 341 3349561", moras: '17'},
        { id: 1, company: 'Notepadd', dni: '43983188', name: 'Pablo Abrate', tel: "+54 9 341 3349561", moras: '7'},
    ];

    return (
        <div className="h-80 overflow-auto scrollbar">
            {Empleados.map((empleado, index) =>(
                <Disclosure key={empleado.id} as="div" className="">
                {({ open }) => (
                    <>
                        <Disclosure.Button 
                            as="div"  
                            key={index} 
                            className={`grid grid-cols-11 p-4 border-b border-lightwhite transition-all duration-300 hover:bg-green-900
                            ${open ? 'bg-green-900 rounded-t cursor-pointer' : 'cursor-pointer'}`}>
                                <div className="col-span-3">
                                    {empleado.company}
                                </div>
                                <div className="col-span-3">
                                    {empleado.name}
                                </div>
                                <div className="col-span-2">
                                    {empleado.dni}
                                </div>
                                <div className="grid col-span-2">
                                    {empleado.tel}
                                </div>
                                <div className="grid place-content-end">
                                    <i
                                        className={`material-symbols-outlined grid place-content-end ${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                                    >expand_more
                                    </i>
                                </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-white bg-lightwhite rounded-b">
                            <DatosEmpleado id={empleado.id} />
                        </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
            ))}
            </div>
    );
}

export default FilaTabla;