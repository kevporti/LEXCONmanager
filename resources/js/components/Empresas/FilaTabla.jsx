import React from 'react';
import ReactDOM from 'react-dom';
import { Disclosure } from '@headlessui/react';
import DatosEscala from './DatosEscala';

function FilaTabla() {
    const Empresas = [
        {id: "10", name: 'Caminos', cuit: '20439831880', contact: 'Pablo Argento', country: "Canada"},
        {id: "9", name: 'Samsung', cuit: '20439831880', contact: 'Notengoni Idea', country: "Uruguay"},
        {id: "8", name: 'Apple', cuit: '20439831880', contact: 'Mark Zuckerberg', country: "Italia"},
        {id: "7", name: 'Samsung', cuit: '20439831880', contact: 'Notengoni Idea', country: "Uruguay"},
        {id: "6", name: 'Samsung', cuit: '20439831880', contact: 'Notengoni Idea', country: "Uruguay"},
        {id: "5", name: 'Coca-Cola', cuit: '20439831880', contact: 'Claudio Raimundez', country: "España"},
        {id: "4", name: 'NASA', cuit: '20439831880', contact: 'Notengoni Idea', country: "Uruguay"},
        {id: "3", name: 'Samsung', cuit: '20439831880', contact: 'Notengoni Idea', country: "Argentina"},
        {id: "2", name: 'Galaxy', cuit: '20439831880', contact: 'Coldplay', country: "Uruguay"},
        {id: "1", name: 'Samsung', cuit: '20439831880', contact: 'Agustin', country: "España"},
    ];

    return (
        <div className="h-80 overflow-auto scrollbar">
            {Empresas.map((empresa) =>(
                <Disclosure key={empresa.id} as="div" className="">
                    {({ open }) => (
                        <>
                            <Disclosure.Button 
                                as="div" 
                                className={`grid grid-cols-12 p-4 border-b border-lightwhite transition-all duration-300 hover:bg-green-900 
                                ${open ? 'bg-green-900 rounded-t cursor-pointer' : 'cursor-pointer'}`}>
                                <div className="col-span-3">
                                    {empresa.cuit}
                                </div>
                                <div className="col-span-3">
                                    {empresa.name}
                                </div>
                                <div className="col-span-3">
                                    {empresa.contact}
                                </div>
                                <div className="grid col-span-2 place-content-end">
                                    {empresa.country}
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
                                <DatosEscala id={empresa.id} />
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    );
}

export default FilaTabla;