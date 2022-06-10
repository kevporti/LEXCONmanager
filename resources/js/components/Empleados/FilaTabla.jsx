import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Disclosure } from '@headlessui/react';
import axios from 'axios';
import DatosEmpleado from './DatosEmpleado';


function FilaTabla() {

    const [Empleados, setEmpleados] = useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/usuario/empleados')
        .then(response => {
            setEmpleados(response.data);
          });
      }, []);

    return (
        <div className="h-80 overflow-auto scrollbar">
            {Empleados.map((empleado, index) =>(
                <Disclosure key={empleado.id_empleado} as="div" className="">
                {({ open }) => (
                    <>
                        <Disclosure.Button 
                            as="div"  
                            key={index} 
                            className={`grid grid-cols-11 p-4 border-b border-lightwhite transition-all duration-300 hover:bg-green-900
                            ${open ? 'bg-green-900 rounded-t cursor-pointer' : 'cursor-pointer'}`}>
                                <div className="col-span-3">
                                    {empleado.nombre_empresa}
                                </div>
                                <div className="col-span-3">
                                    {empleado.nombre_y_apellido}
                                </div>
                                <div className="col-span-2">
                                    {empleado.DNI}
                                </div>
                                <div className="grid col-span-2">
                                    {empleado.telefono}
                                </div>
                                <div className="grid place-content-end">
                                    <i
                                        className={`material-symbols-outlined grid place-content-end ${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                                    >expand_more
                                    </i>
                                </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-white bg-lightwhite rounded-b">
                            <DatosEmpleado id={empleado.id_empleado} />
                        </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
            ))}
            </div>
    );
}

export default FilaTabla;