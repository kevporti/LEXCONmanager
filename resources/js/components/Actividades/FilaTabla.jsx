import React from 'react';
import ReactDOM from 'react-dom';
import { Disclosure } from '@headlessui/react';
import DatosEscala from './DatosEscala';


function FilaTabla() {
    const Actividades = [
        { id:"10" , name: 'Samsung', state: 'Intimado', contact: 'Agustin', date: "15 Abril 2022"},
        { id:"9" , name: 'Galaxy', state: '', contact: 'Coldplay', date: "8 Marzo 2022"},
        { id:"8" , name: 'Samsung', state: 'Intimado', contact: 'Notengoni Idea', date: "18 Abril 2022"},
        { id:"7" , name: 'NASA', state: 'Intimado', contact: 'Notengoni Idea', date: "8 Marzo 2022"},
        { id:"6" , name: 'Coca-Cola', state: '', contact: 'Claudio Raimundez', date: "15 Abril 2022"},
        { id:"5" , name: 'Samsung', state: 'Intimado', contact: 'Notengoni Idea', date: "8 Marzo 2022"},
        { id:"4" , name: 'Samsung', state: '', contact: 'Notengoni Idea', date: "8 Marzo 2022"},
        { id:"3" , name: 'Apple', state: 'Intimado', contact: 'Mark Zuckerberg', date: "24 Abril 2022"},
        { id:"2" , name: 'Samsung', state: '', contact: 'Notengoni Idea', date: "8 Marzo 2022"},
        { id:"1" , name: 'Caminos', state: 'Intimado', contact: 'Pablo Argento', date: "9 Marzo 2022"},
    ];

    return (
        <div className="h-80 overflow-auto scrollbar">
            {Actividades.map((actividad) => (
                <Disclosure key={actividad.id} as="div" className="">
                    {({ open }) => (
                        <>
                            <Disclosure.Button as="div" className={`grid grid-cols-11 p-4 border-b border-lightwhite transition-all duration-300 hover:bg-green-900 ${
                                open ? 'bg-green-900 rounded-t cursor-pointer' : 'cursor-pointer'}`}>
                                <div className="grid place-content-start col-span-3">
                                    <span className="">{actividad.name}</span>
                                </div>
                                <div className="grid place-content-start col-span-3">
                                    {actividad.contact}
                                </div>
                                <div className="grid place-content-start col-span-3">
                                    {actividad.state}
                                </div>
                                <div className="grid place-content-end">
                                    {actividad.date}
                                </div>
                                <div className="grid place-content-end">
                                    <i
                                        className={`material-symbols-outlined grid place-content-end ${
                                        open ? 'rotate-180 transform' : ''
                                        } h-5 w-5`}
                                    >expand_more
                                    </i>
                                </div>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-white bg-lightwhite rounded-b">
                                <DatosEscala id={actividad.id} />
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    );
}

export default FilaTabla;