import React from 'react';
import ReactDOM from 'react-dom';
import { Disclosure } from '@headlessui/react';
import DatosEscala from './DatosEscala';

function FilaTabla() {
    const Empresas = [
        {id: "10", name: 'Caminos', cuit: '20439831880', tel: "+54 9 341 3349561"},
        {id: "9", name: 'Samsung', cuit: '20439831880', tel: "+54 9 341 3349561"},
        {id: "8", name: 'Apple', cuit: '20439831880', tel: "+54 9 341 3349561"},
        {id: "7", name: 'Samsung', cuit: '20439831880', tel: "+54 9 341 3349561"},
        {id: "6", name: 'Samsung', cuit: '20439831880', tel: "+54 9 341 3349561"},
        {id: "5", name: 'Coca-Cola', cuit: '20439831880', tel: "+54 9 341 3349561"},
        {id: "4", name: 'NASA', cuit: '20439831880', tel: "+54 9 341 3349561"},
        {id: "3", name: 'Samsung', cuit: '20439831880', tel: "+54 9 341 3349561"},
        {id: "2", name: 'Galaxy', cuit: '20439831880', tel: "+54 9 341 3349561"},
        {id: "1", name: 'Samsung', cuit: '20439831880', tel: "+54 9 341 3349561"},
    ];

    return (
        <div className="h-80 overflow-auto scrollbar">
            {Empresas.map((empresa) =>(
                <Disclosure key={empresa.id} as="div" className="">
                    {({ open }) => (
                        <>
                            <Disclosure.Button 
                                as="div" 
                                className={`grid grid-cols-9 p-4 border-b border-lightwhite transition-all duration-300 hover:bg-green-900 
                                ${open ? 'bg-green-900 rounded-t cursor-pointer' : 'cursor-pointer'}`}>
                                <div className="col-span-3">
                                    {empresa.name}
                                </div>
                                <div className="col-span-3">
                                    {empresa.cuit}
                                </div>
                                <div className="grid col-span-2">
                                    {empresa.tel}
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