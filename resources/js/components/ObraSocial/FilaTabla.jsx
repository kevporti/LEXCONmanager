import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Disclosure } from "@headlessui/react";
import DatosObraSocial from "./DatosObraSocial";

function FilaTabla() {
    const [ObraSocial, setObraSocial] = useState([]);

    useEffect(() => {
        axios
            .get("/api/usuario/liquidacion_deudas/obraSocial")
            .then((response) => {
                setObraSocial(response.data);
            });
    }, []);

    return (
        <div className="h-96 overflow-auto scrollbar print:h-full print:text-black">
            {ObraSocial.map((obraSocial, index) => (
                <Disclosure
                    key={obraSocial.id_obra_social}
                    as="div"
                    className=""
                >
                    {({ open }) => (
                        <>
                            <Disclosure.Button
                                as="div"
                                key={index}
                                className={`transition-all duration-300 hover:bg-green-900
                            ${
                                open
                                    ? "bg-green-900 rounded-t cursor-pointer print:border-y print:rounded-none print:border-black"
                                    : "cursor-pointer print:hidden"
                            }`}
                            >
                                <div
                                    key={index}
                                    className="grid grid-cols-12 p-4 border-b border-lightwhite print:grid-cols-11"
                                >
                                    <div className="grid col-span-2">
                                        {obraSocial.nombre_empresa}
                                    </div>
                                    <div className="grid place-content-end col-span-3">
                                        ${obraSocial.subtotalObra}
                                    </div>
                                    <div className="grid place-content-end col-span-3">
                                        ${obraSocial.subtotalPatronalObra}
                                    </div>
                                    <div className="grid place-content-end col-span-3">
                                        ${obraSocial.totalFinalObra}
                                    </div>
                                    <div className="grid place-content-end print:hidden">
                                        <i
                                            className={`material-symbols-outlined grid place-content-end ${
                                                open
                                                    ? "rotate-180 transform"
                                                    : ""
                                            } h-5 w-5`}
                                        >
                                            expand_more
                                        </i>
                                    </div>
                                </div>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-white bg-lightwhite rounded-b print:text-black">
                                <DatosObraSocial
                                    id={obraSocial.id_obra_social}
                                />
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    );
}

export default FilaTabla;
