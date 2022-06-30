import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function DatosEscala(vigencia) {
    const [Dato, setDato] = useState([]);
    const [Msg, setMsg] = useState([]);
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

    let vig = vigencia.vigencia;

    useEffect(() => {
        let item = { vig };
        axios.post("/api/usuario/datosEscalas", item).then((resp) => {
            setDato(resp.data);
            console.log(Dato);
        });
    }, []);

    async function handleDelete(id) {
        const { data } = await axios.delete(
            `/api/usuario/escalas/eliminarEscala/${id}`
        );
        setMsg(data);
        window.location.reload();
    }

    return (
        <div>
            {Dato.map((dato) => (
                <div
                    key={dato.id_escala_s}
                    className="grid grid-cols-3 gap-y-2 p-4 border-b border-lightwhite whitespace-pre-line"
                >
                    <div>
                        <div className="flex">
                            <p>Sueldo Básico:</p>
                            <p className="ml-2 font-light">
                                ${dato.sueldo_basico}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <p>Hs Extra 50%:</p>
                            <p className="ml-2 font-light">
                                ${dato.hs_extra_50}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <p>Hs Extra 100%:</p>
                            <p className="ml-2 font-light">
                                ${dato.hs_extra_100}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <p>Rama/Categoría:</p>
                            <p className="ml-2 font-light">
                                {RamaCategoria.filter((rama) =>
                                    rama.id == dato.id_rama_categoria
                                        ? rama.rama
                                        : undefined
                                ).map((filtered) => (
                                    <>{filtered.rama}</>
                                ))}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <p>Simple Presencia:</p>
                            <p className="ml-2 font-light">
                                ${dato.simple_presencia}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <p>Permanencia fuera Residencia:</p>
                            <p className="ml-2 font-light">
                                ${dato.perm_fuera_resid}
                            </p>
                        </div>
                    </div>
                    <div className="grid col-span-3 pt-4">
                        <div className="grid grid-cols-2">
                            <div className="grid">
                                <div className="flex items-center">
                                    <p>Creado por:</p>
                                    <p className="ml-2 font-light">
                                        {dato.firma_usuario}
                                    </p>
                                </div>
                            </div>
                            <div className="grid place-content-end">
                                <i
                                    onClick={() =>
                                        handleDelete(dato.id_escala_s)
                                    }
                                    className="material-symbols-outlined p-2 bg-red-800 hover:bg-red-900 cursor-pointer border border-sm border-lightwhite"
                                >
                                    close
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DatosEscala;
