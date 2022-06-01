import React from 'react';
import ReactDOM from 'react-dom';

function DatosEmpleado(id) {

    const Datos = [
        {id: "10", categoria: 'Conductor 1ra', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha_alta: "14/10/2005", fecha_baja: "Nulo", motivo_reclamo: "Acá va a ir el motivo del reclamo del empleado por la mora, y este texto podría ser muy corto como también largo, estoy escribiendo esto largo para poder ver cómo encaja el contenido dentro de la tabla."},
        {id: "9", categoria: 'Conductor 1ra', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha_alta: "14/10/2005", fecha_baja: "24/05/2020", motivo_reclamo: "Acá va a ir el motivo del reclamo del empleado por la mora, y este texto podría ser muy corto como también largo, estoy escribiendo esto largo para poder ver cómo encaja el contenido dentro de la tabla."},
        {id: "8", categoria: 'Conductor 1ra', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha_alta: "14/10/2005", fecha_baja: "Nulo", motivo_reclamo: "Acá va a ir el motivo del reclamo del empleado por la mora, y este texto podría ser muy corto como también largo, estoy escribiendo esto largo para poder ver cómo encaja el contenido dentro de la tabla."},
        {id: "7", categoria: 'Conductor 1ra', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha_alta: "14/10/2005", fecha_baja: "24/05/2020", motivo_reclamo: "Acá va a ir el motivo del reclamo del empleado por la mora, y este texto podría ser muy corto como también largo, estoy escribiendo esto largo para poder ver cómo encaja el contenido dentro de la tabla."},
        {id: "6", categoria: 'Conductor 1ra', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha_alta: "14/10/2005", fecha_baja: "24/05/2020", motivo_reclamo: "Acá va a ir el motivo del reclamo del empleado por la mora, y este texto podría ser muy corto como también largo, estoy escribiendo esto largo para poder ver cómo encaja el contenido dentro de la tabla."},
        {id: "5", categoria: 'Conductor 1ra', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha_alta: "14/10/2005", fecha_baja: "Nulo", motivo_reclamo: "Acá va a ir el motivo del reclamo del empleado por la mora, y este texto podría ser muy corto como también largo, estoy escribiendo esto largo para poder ver cómo encaja el contenido dentro de la tabla."},
        {id: "4", categoria: 'Conductor 1ra', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha_alta: "14/10/2005", fecha_baja: "24/05/2020", motivo_reclamo: "Acá va a ir el motivo del reclamo del empleado por la mora, y este texto podría ser muy corto como también largo, estoy escribiendo esto largo para poder ver cómo encaja el contenido dentro de la tabla."},
        {id: "3", categoria: 'Conductor 1ra', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha_alta: "14/10/2005", fecha_baja: "Nulo", motivo_reclamo: "Acá va a ir el motivo del reclamo del empleado por la mora, y este texto podría ser muy corto como también largo, estoy escribiendo esto largo para poder ver cómo encaja el contenido dentro de la tabla."},
        {id: "2", categoria: 'Conductor 1ra', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha_alta: "14/10/2005", fecha_baja: "Nulo", motivo_reclamo: "Acá va a ir el motivo del reclamo del empleado por la mora, y este texto podría ser muy corto como también largo, estoy escribiendo esto largo para poder ver cómo encaja el contenido dentro de la tabla."},
        {id: "1", categoria: 'Conductor 1ra', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha_alta: "14/10/2005", fecha_baja: "24/05/2020", motivo_reclamo: "Acá va a ir el motivo del reclamo del empleado por la mora, y este texto podría ser muy corto como también largo, estoy escribiendo esto largo para poder ver cómo encaja el contenido dentro de la tabla."},
    ]
    
    return(
        <div>
            {Datos.filter(dato => dato.id == id.id).map((dato) => (
                <div key={dato.id} className="grid grid-cols-1 gap-y-2 p-4">
                    <div className="grid grid-cols-3 border-b pb-4 border-lightwhite">
                        <div className="">
                            <p>Fecha de Alta:</p>
                            <p className="font-light">{dato.fecha_alta}</p>
                        </div>
                        <div className="">
                            <p>Fecha de Baja:</p>
                            <p className="font-light">{dato.fecha_baja}</p>
                        </div>
                        <div className="">
                            <p>Rama/Categoría:</p>
                            <p className="font-light">{dato.categoria}</p>
                        </div>
                    </div>
                    <div className="white-space-pre-line border-b pb-4 border-lightwhite">
                        <p className="mb-1">Motivo Reclamo:</p>
                        <p className="font-light">{dato.motivo_reclamo}</p>
                    </div>
                    <div className="grid grid-cols-3 pt-4">
                        <div className="flex">
                            <p>Editado:</p>
                            <p className="font-light ml-2">{dato.firma_usuario}, {dato.edited_time}.</p>
                        </div>
                        <div className="grid col-start-3 grid-cols-4">
                            <div className="grid col-start-2">
                                <button className="flex items-center justify-end py-2 px-4 cursor-pointer rounded-sm bg-red-900 transition-colors duration-300">
                                    Eliminar
                                    <i className="material-symbols-outlined ml-2 cursor-pointer">delete</i>
                                </button>
                            </div>
                            <div className="grid col-start-4">
                                <button className="flex items-center justify-end py-2 px-4 cursor-pointer rounded-sm bg-green-900 transition-colors duration-300">
                                    Editar
                                    <i className="material-symbols-outlined ml-2 cursor-pointer">edit</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DatosEmpleado;