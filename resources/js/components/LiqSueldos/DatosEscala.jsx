import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function DatosEscala(id) {
    const RamaCategoria = [
        {
            id: 0,
            rama: "Personal de corta distancia (menos de 100 km.)",
            adicionales: 0,
            antiguedad: 0.01,
        },
        {
            id: 1,
            rama: "Personal de larga distancia (más de 100 km.)",
            adicionales: 0,
            antiguedad: 0.01,
        },
        {
            id: 2,
            rama: "Personal de larga distancia (más de 100 km.) - Transporte Pesado Sistema carretón",
            adicionales: 0,
            antiguedad: 0.01,
        },
        {
            id: 3,
            rama: "Personal de larga distancia (más de 100 km.) - Transporte de Automóviles",
            adicionales: 0,
            antiguedad: 0.01,
        },
        {
            id: 4,
            rama: "Transporte de Caudales",
            adicionales: 0.2,
            antiguedad: 0.01,
        },
        {
            id: 5,
            rama: "Transporte de Clearing y Carga Postal y Empresas Privadas de Correo",
            adicionales: 0.15,
            antiguedad: 0.01,
        },
        {
            id: 6,
            rama: "Recolección de residuos",
            adicionales: 0.15,
            antiguedad: 0.01,
        },
        {
            id: 7,
            rama: "Transporte y Distribución de Diarios y Revistas",
            adicionales: 0.12,
            antiguedad: 0.01,
        },
        {
            id: 8,
            rama: "Transporte de Combustibles Líquidos",
            adicionales: 0.15,
            antiguedad: 0.01,
        },
        {
            id: 9,
            rama: "Transporte de Materiales Peligrosos",
            adicionales: 0.2,
            antiguedad: 0.01,
        },
        {
            id: 10,
            rama: "Transporte y/o Logística para la Actividad Petrolera",
            adicionales: 0.4,
            antiguedad: 0.01,
        },
        {
            id: 11,
            rama: "Transporte pesado - Especialidad de Transporte por Sistema de Arrastre",
            adicionales: 0,
            antiguedad: 0.01,
        },
        {
            id: 12,
            rama: "Transporte pesado - Especialidad de Desarmado, Transporte y Armado de Equipos Vinculados a la Perforación Petrolífera y Actividades Afines",
            adicionales: 0,
            antiguedad: 0.01,
        },
        {
            id: 13,
            rama: "Transporte en Zona de Zafra",
            adicionales: 0.1,
            antiguedad: 0.01,
        },
        {
            id: 14,
            rama: "Expreso, Mudanzas y Encomiendas",
            adicionales: 0.1,
            antiguedad: 0.01,
        },
        {
            id: 15,
            rama: "Transporte y Distribución de Aguas, Aguas Gaseosas y Cerveza",
            adicionales: 0,
            antiguedad: 0.01,
        },
        {
            id: 16,
            rama: "Operaciones Logísticas, Almacenamiento y Distribución",
            adicionales: 0.1,
            antiguedad: 0.01,
        },
        {
            id: 17,
            rama: "Residuos Patológicos",
            adicionales: 0.2,
            antiguedad: 0.01,
        },
        {
            id: 18,
            rama: "Residuos Industriales Especiales",
            adicionales: 0.2,
            antiguedad: 0.01,
        },
        {
            id: 19,
            rama: "Residuos Industriales No Especiales",
            adicionales: 0.15,
            antiguedad: 0.01,
        },
    ];

    const [Dato, setDato] = useState([]);

    useEffect(() => {
        let Id = id.id;

        axios.post(`/api/usuario/buscarLiqSueldo`, { Id }).then((response) => {
            setDato(response.data);
        });
    }, []);

    function formatDate(string) {
        var options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(string).toLocaleDateString([], options);
    }

    function Antiguedad(date1, date2) {
        let año1 = new Date(date1).toLocaleString([], { year: "numeric" });
        let año2 = new Date(date2).toLocaleString([], { year: "numeric" });
        let mes1 = new Date(date1).toLocaleString([], { month: "numeric" });
        let mes2 = new Date(date2).toLocaleString([], { month: "numeric" });

        if (año1 == año2) {
            return 0;
        } else {
            if (mes1 >= mes2) {
                return año2 - año1;
            } else {
                return año2 - año1 - 1;
            }
        }
    }

    function adicional(dato) {
        let hola = RamaCategoria.filter((rama) =>
            rama.id == dato.id_rama_categoria ? rama : undefined
        ).map((filtered) => {
            return filtered.adicionales;
        });
        return hola[0] * dato.sueldo_neto;
    }

    async function download() {
        // const { data } = await axios.get(`/api/usuario/descargarpdf/`, {
        //     responseType: "blob",
        // });

        // const url = window.URL.createObjectURL(new blob([data]));
        // window.open(url, "_blank");
        window.print();
    }

    return (
        <div>
            {Dato.map((dato) => (
                <div
                    key={dato.id_liq_sueldo}
                    className="grid grid-cols-1 gap-y-2 p-4 print:text-black"
                >
                    <div className="grid grid-cols-4 border-b pb-4 border-lightwhite">
                        <div>Sueldo básico:</div>
                        <div>${dato.sueldo_neto}</div>
                        <div>Adicional por rama:</div>
                        <div>${adicional(dato)}</div>
                    </div>
                    <div className="grid grid-cols-4 border-b pb-4 border-lightwhite">
                        <div>Horas extra al 50%:</div>
                        <div>${dato.extra_50 * dato.hs_extra_50}</div>
                        <div>Horas extra al 100%:</div>
                        <div>${dato.extra_100 * dato.hs_extra_100}</div>
                    </div>
                    <div className="grid grid-cols-4 border-b pb-4 border-lightwhite">
                        <div>Carga y Descarga:</div>
                        <div>
                            $
                            {(dato.sueldo_neto / 24).toFixed(2) *
                                dato.carga_desc}
                        </div>
                        <div>Simple Presencia:</div>
                        <div>${dato.simple_presencia * dato.escalaSP}</div>
                    </div>
                    <div className="grid grid-cols-4 border-b pb-4 border-lightwhite">
                        <div>Años de Antigüedad:</div>
                        <div>
                            {Antiguedad(dato.fecha_alta, dato.updated_at)}
                        </div>
                        <div>Extra por antigüedad:</div>
                        <div>
                            $
                            {(dato.sueldo_neto *
                                Antiguedad(dato.fecha_alta, dato.updated_at)) /
                                100}{" "}
                            ({Antiguedad(dato.fecha_alta, dato.updated_at)}
                            %)
                        </div>
                    </div>
                    <div className="grid grid-cols-4 border-b pb-4 border-lightwhite">
                        <div className="grid col-start-3">
                            Total Remunerativo:
                        </div>
                        <div>
                            $
                            {dato.sueldo_neto +
                                dato.extra_50 * dato.hs_extra_50 +
                                dato.extra_100 * dato.hs_extra_100 +
                                (dato.sueldo_neto / 24).toFixed(2) *
                                    dato.carga_desc +
                                dato.simple_presencia * dato.escalaSP +
                                (dato.sueldo_neto *
                                    Antiguedad(
                                        dato.fecha_alta,
                                        dato.updated_at
                                    )) /
                                    100 +
                                adicional(dato)}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mt-2">
                        <div>
                            Creado: {dato.firma_usuario},{" "}
                            {formatDate(dato.updated_at)}.
                        </div>
                        <div className="grid place-content-end">
                            <button
                                onClick={() => download()}
                                type="submit"
                                className="print:hidden flex items-center justify-center py-2 px-4 cursor-pointer rounded-sm bg-green-900 transition-colors duration-300"
                            >
                                Descargar
                                <i className="material-symbols-outlined ml-2 cursor-pointer">
                                    download
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DatosEscala;
