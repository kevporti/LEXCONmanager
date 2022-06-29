import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import DatosEscala from "./DatosEscala";

function FilaTabla() {
    const [Escalas, setEscalas] = useState([]);

    useEffect(() => {
        axios.get("/api/usuario/escalas").then((response) => {
            setEscalas(response.data);
        });
    }, []);

    function formatDate(string) {
        var options = {
            year: "numeric",
            month: "long",
            timeZone: "UTC",
        };
        return new Date(string).toLocaleDateString("es-AR", options);
    }

    return (
        <div className="h-80 overflow-auto scrollbar">
            <div className="">
                {Escalas.map((escala) => (
                    <Disclosure key={escala.id_escala_s} as="div" className="">
                        {({ open }) => (
                            <>
                                <Disclosure.Button
                                    as="div"
                                    className={`flex justify-between items-center p-4 border-b border-lightwhite transition-all duration-300 hover:bg-green-900 ${
                                        open
                                            ? "bg-green-900 rounded-t cursor-pointer"
                                            : "cursor-pointer"
                                    }`}
                                >
                                    <span className="font-medium">
                                        {formatDate(escala.vigencia)}
                                    </span>
                                    <i
                                        className={`material-symbols-outlined ${
                                            open ? "rotate-180 transform" : ""
                                        } h-5 w-5`}
                                    >
                                        expand_more
                                    </i>
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-white bg-lightwhite rounded-b">
                                    <DatosEscala vigencia={escala.vigencia} />
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
