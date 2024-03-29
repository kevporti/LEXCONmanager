import React from 'react';
import ReactDOM from 'react-dom';
import { Disclosure } from '@headlessui/react';
import DatosAporteSindical from './DatosAporteSindical';

function FilaTabla() {
    const Contactos = [
        {id: "10", subtot: "150000", company: 'Caminos', subtotpatron: "300000", total: "450000"},
        {id: "9", subtot: "150000", company: 'Samsung', subtotpatron: "300000", total: "450000"},
        {id: "8", subtot: "150000", company: 'Apple', subtotpatron: "300000", total: "450000"},
        {id: "7", subtot: "150000", company: 'Samsung', subtotpatron: "300000", total: "450000"},
        {id: "6", subtot: "150000", company: 'Samsung', subtotpatron: "300000", total: "450000"},
        {id: "5", subtot: "150000", company: 'Coca-Cola', subtotpatron: "300000", total: "450000"},
        {id: "4", subtot: "150000", company: 'NASA', subtotpatron: "300000", total: "450000"},
        {id: "3", subtot: "150000", company: 'Samsung', subtotpatron: "300000", total: "450000"},
        {id: "2", subtot: "150000", company: 'Galaxy', subtotpatron: "300000", total: "450000"},
        {id: "1", subtot: "150000", company: 'Samsung', subtotpatron: "300000", total: "450000"},
    ];

    return (
        <div className="h-96 overflow-auto scrollbar">
            {Contactos.map((contacto, index) =>(
                <Disclosure key={contacto.id} as="div" className="">
                {({ open }) => (
                    <>
                        <Disclosure.Button
                            as="div"
                            key={index}
                            className={`transition-all duration-300 hover:bg-green-900
                            ${open ? 'bg-green-900 rounded-t cursor-pointer' : 'cursor-pointer'}`}>
                                <div key={index} className="grid grid-cols-12 p-4 border-b border-lightwhite">
                                    <div className="grid col-span-2">
                                        {contacto.company}
                                    </div>
                                    <div className="grid place-content-end col-span-3">
                                        ${contacto.subtot}
                                    </div>
                                    <div className="grid place-content-end col-span-3">
                                        ${contacto.subtotpatron}
                                    </div>
                                    <div className="grid place-content-end col-span-3">
                                        ${contacto.total}
                                    </div>
                                    <div className="grid place-content-end">
                                        <i
                                            className={`material-symbols-outlined grid place-content-end ${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                                        >expand_more
                                        </i>
                                    </div>
                                </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-white bg-lightwhite rounded-b">
                            <DatosAporteSindical id={contacto.id} />
                        </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
            ))}
        </div>
    );
}

export default FilaTabla;