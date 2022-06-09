import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Disclosure } from '@headlessui/react';
import axios from 'axios';

function FilaTabla() {
    
    const [Contacto, setContacto] = useState([]);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/usuario/contactos')
        .then(response => {
            setContacto(response.data);
        });
    }, []);

    async function deleteContact(contacto) {
        let Id = contacto.contacto.id_contacto;
        axios.delete(`http://127.0.0.1:8000/api/usuario/contactos/eliminar/${Id}`)
            .then(response => {
                if (response.data.success) {
                    setMsg(response.data.success);
                    window.location.reload();
                } else {
                    setMsg(response.data.fail);
                    window.location.reload();
                }
            });
    }

    return (
        <div className="h-80 overflow-auto scrollbar">
            {Contacto.map((contacto) =>(
                <div key={contacto.id} className="grid grid-cols-14 p-4 border-b border-lightwhite">
                    <div className="col-span-2 grid content-center">
                        {contacto.nombre_empresa}
                    </div>
                    <div className="col-span-3 grid content-center">
                        {contacto.nombre_y_apellido}
                    </div>
                    <div className="col-span-2 grid content-center">
                        {contacto.cargo}
                    </div>
                    <div className="col-span-3 grid content-center">
                        {contacto.tel_celular}
                    </div>
                    <div className="col-span-3 grid content-center">
                        {contacto.email}
                    </div>
                    <div className="grid  place-content-end content-center">
                        <i className="material-symbols-outlined cursor-pointer text-red-500" onClick={() => deleteContact({contacto})} >delete</i>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FilaTabla;