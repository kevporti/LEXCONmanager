import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Disclosure } from "@headlessui/react";
import DatosEscala from "./DatosEscala";
import axios from "axios";

function FilaTabla() {
    const [Empresa, setEmpresa] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/usuario/empresas")
            .then((response) => {
                setEmpresa(response.data);
            });
    }, []);

    return (
        <div className="h-80 overflow-auto scrollbar">
            {Empresa.map((empresa) => (
                <Disclosure key={empresa.id} as="div" className="">
                    {({ open }) => (
                        <>
                            <Disclosure.Button
                                as="div"
                                className={`grid grid-cols-9 p-4 border-b border-lightwhite transition-all duration-300 hover:bg-green-900 
                                ${
                                    open
                                        ? "bg-green-900 rounded-t cursor-pointer"
                                        : "cursor-pointer"
                                }`}
                            >
                                <div className="col-span-3">
                                    {empresa.nombre_empresa}
                                </div>
                                <div className="col-span-3">{empresa.CUIT}</div>
                                <div className="grid col-span-2">
                                    {empresa.tel_celular}
                                </div>
                                <div className="grid place-content-end">
                                    <i
                                        className={`material-symbols-outlined grid place-content-end ${
                                            open ? "rotate-180 transform" : ""
                                        } h-5 w-5`}
                                    >
                                        expand_more
                                    </i>
                                </div>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-white bg-lightwhite rounded-b">
                                <DatosEscala id={empresa.id_empresa} />
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    );
}

export default FilaTabla;
