import React from 'react';
import ReactDOM from 'react-dom';
import { Disclosure } from '@headlessui/react';
// import DatosEscala from './DatosEscala';

function FilaTabla() {
    const Contactos = [
        {id: "10", name:"Francisco P", company: 'Caminos', cargo:"Portero", email: 'challengerenlolgmail.com', tel: "+54 9 341 3349561"},
        {id: "9", name:"Francisco P", company: 'Samsung', cargo:"Portero", email: 'challengerenlolgmail.com', tel: "+54 9 341 3349561"},
        {id: "8", name:"Francisco P", company: 'Apple', cargo:"Portero", email: 'challengerenlolgmail.com', tel: "+54 9 341 3349561"},
        {id: "7", name:"Francisco P", company: 'Samsung', cargo:"Portero", email: 'challengerenlolgmail.com', tel: "+54 9 341 3349561"},
        {id: "6", name:"Francisco P", company: 'Samsung', cargo:"Portero", email: 'challengerenlolgmail.com', tel: "+54 9 341 3349561"},
        {id: "5", name:"Francisco P", company: 'Coca-Cola', cargo:"Portero", email: 'challengerenlolgmail.com', tel: "+54 9 341 3349561"},
        {id: "4", name:"Francisco P", company: 'NASA', cargo:"Portero", email: 'challengerenlolgmail.com', tel: "+54 9 341 3349561"},
        {id: "3", name:"Francisco P", company: 'Samsung', cargo:"Portero", email: 'challengerenlolgmail.com', tel: "+54 9 341 3349561"},
        {id: "2", name:"Francisco P", company: 'Galaxy', cargo:"Portero", email: 'challengerenlolgmail.com', tel: "+54 9 341 3349561"},
        {id: "1", name:"Francisco P", company: 'Samsung', cargo:"Portero", email: 'challengerenlolgmail.com', tel: "+54 9 341 3349561"},
    ];

    return (
        <div className="h-80 overflow-auto scrollbar">
            {Contactos.map((contacto, index) =>(
                <div key={index} className="grid grid-cols-14 p-4 border-b border-lightwhite">
                    <div className="col-span-2">
                        {contacto.company}
                    </div>
                    <div className="col-span-3">
                        {contacto.name}
                    </div>
                    <div className="grid col-span-2">
                        {contacto.cargo}
                    </div>
                    <div className="grid col-span-3">
                        {contacto.tel}
                    </div>
                    <div className="grid col-span-3">
                        {contacto.email}
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