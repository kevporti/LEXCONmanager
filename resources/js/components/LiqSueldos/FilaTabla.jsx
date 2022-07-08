import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import DatosEscala from "./DatosEscala";

function FilaTabla() {
    const [Sueldo, setSueldo] = useState([]);

    useEffect(() => {
        axios.get("/api/usuario/liquidacion_sueldos").then((response) => {
            setSueldo(response.data);
        });
    }, []);

    function formatDate(string) {
        var options = {
            year: "numeric",
            month: "long",
            timeZone: "UTC",
        };
        const date = new Date(string).toLocaleDateString("es-AR", options);

        return date.charAt(0).toUpperCase() + date.slice(1);
    }

    return (
        <div className="h-80 overflow-auto scrollbar">
            <div className="">
                {Sueldo.map((sueldo) => (
                    <Disclosure
                        key={sueldo.id_liq_sueldo}
                        as="div"
                        className=""
                    >
                        {({ open }) => (
                            <>
                                <Disclosure.Button
                                    as="div"
                                    className={`grid grid-cols-5 p-4 border-b border-lightwhite transition-all duration-300 hover:bg-green-900 ${
                                        open
                                            ? "bg-green-900 rounded-t cursor-pointer"
                                            : "cursor-pointer"
                                    }`}
                                >
                                    <div>{sueldo.nombre_empresa}</div>
                                    <div>{sueldo.nombre_y_apellido}</div>
                                    <div>
                                        {sueldo.reajuste == 0 ? "No" : "Si"}
                                    </div>
                                    <div className="grid place-content-end">
                                        {formatDate(sueldo.mes_año)}
                                    </div>
                                    <div className="grid place-content-end">
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
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-white bg-lightwhite rounded-b">
                                    <DatosEscala id={sueldo.id_liq_sueldo} />
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    );
}

export default FilaTabla;
