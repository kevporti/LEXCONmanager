import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { filter } from "lodash";

function DatosEmpleado(id) {
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

    const [Empleado, setEmpleado] = useState([]);
    const Id = id.id;

    function formatDate(string) {
        var options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(string).toLocaleDateString([], options);
    }

    async function deleteEmpleado() {
        await axios
            .delete(`/api/usuario/empleados/eliminar/${Id}`)
            .then((response) => {
                console.log(response.data);
                window.location.reload();
            });
    }

    useEffect(() => {
        let Id = id.id;

        axios.post(`/api/usuario/datosEmpleados`, { Id }).then((response) => {
            setEmpleado(response.data);
        });
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1 gap-y-2 p-4">
                <div className="grid grid-cols-3 border-b pb-4 border-lightwhite">
                    <div className="">
                        <p>Fecha de Alta:</p>
                        <p className="font-light">{Empleado.fecha_alta}</p>
                    </div>
                    <div className="">
                        <p>Fecha de Baja:</p>
                        <p className="font-light">
                            {Empleado.fecha_baja
                                ? Empleado.fecha_baja
                                : "Actualmente trabajando."}
                        </p>
                    </div>
                    <div className="">
                        <p>Rama/Categoría:</p>
                        <p className="font-light">
                            {RamaCategoria.map((rama) =>
                                rama.id == Empleado.id_rama_categoria ? (
                                    <>{rama.rama}</>
                                ) : undefined
                            )}
                        </p>
                    </div>
                </div>
                <div className="white-space-pre-line border-b pb-4 border-lightwhite">
                    <p className="mb-1">Motivo Reclamo:</p>
                    <p className="font-light">{Empleado.motivo_reclamo}</p>
                </div>
                <div className="grid grid-cols-3 pt-4">
                    <div className="flex">
                        <p>Editado:</p>
                        <p className="font-light ml-2">
                            {Empleado.firma_usuario},{" "}
                            {formatDate(Empleado.updated_at)}.
                        </p>
                    </div>
                    <div className="grid col-start-3 grid-cols-4">
                        <div className="grid col-start-2">
                            <button
                                onClick={deleteEmpleado}
                                className="flex items-center justify-end py-2 px-4 cursor-pointer rounded-sm bg-red-900 transition-colors duration-300"
                            >
                                Eliminar
                                <i className="material-symbols-outlined ml-2 cursor-pointer">
                                    delete
                                </i>
                            </button>
                        </div>
                        <div className="grid col-start-4">
                            <button className="flex items-center justify-end py-2 px-4 cursor-pointer rounded-sm bg-green-900 transition-colors duration-300">
                                Editar
                                <i className="material-symbols-outlined ml-2 cursor-pointer">
                                    edit
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DatosEmpleado;
