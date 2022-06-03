import React from 'react';
import ReactDOM from 'react-dom';

function DatosObraSocial(id) {

    const Datos = [
        {id: "10", estado: 'Cobrado', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha: "14/10/2021", tasaint: 3.72, totsueldos: 150000},
        {id: "9", estado: 'No Cobrado', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha: "14/10/2021", tasaint: 3.72, totsueldos: 150000},
        {id: "8", estado: 'No Cobrado', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha: "14/10/2021", tasaint: 3.72, totsueldos: 150000},
        {id: "7", estado: 'No Cobrado', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha: "14/10/2021", tasaint: 3.72, totsueldos: 150000},
        {id: "6", estado: 'Cobrado', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha: "14/10/2021", tasaint: 3.72, totsueldos: 150000},
        {id: "5", estado: 'No Cobrado', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha: "14/10/2021", tasaint: 3.72, totsueldos: 150000},
        {id: "4", estado: 'No Cobrado', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha: "14/10/2021", tasaint: 3.72, totsueldos: 150000},
        {id: "3", estado: 'Cobrado', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha: "14/10/2021", tasaint: 3.72, totsueldos: 150000},
        {id: "2", estado: 'No Cobrado', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha: "14/10/2021", tasaint: 3.72, totsueldos: 150000},
        {id: "1", estado: 'Cobrado', firma_usuario: "Claudio", edited_time: "28 Mayo", fecha: "14/10/2021", tasaint: 3.72, totsueldos: 150000},
    ];

    const Sueldos = [
        {id: 1, name: "Franco L. Duarte", totremun: 30000, reajuste: "Si"},
        {id: 1, name: "Franco L. Duarte", totremun: 65000, reajuste: "No"},
        {id: 1, name: "Franco L. Duarte", totremun: 65000, reajuste: "No"},
        {id: 1, name: "Franco L. Duarte", totremun: 30000, reajuste: "Si"},
        {id: 1, name: "Franco L. Duarte", totremun: 30000, reajuste: "Si"},
    ]
    
    return(
        <div>
            {Datos.filter(dato => dato.id == id.id).map((dato) => (
                <div key={dato.id} className="grid grid-cols-2 gap-y-2 p-4">
                    <div className="border-b border-r pb-4 border-lightwhite">
                        {Sueldos.map(sueldo => (
                            <div className=" grid grid-cols-2 py-2">
                                <div className="">
                                    <p>Empleado:</p>
                                    <p className="font-light">{sueldo.name}</p>
                                </div>
                                <div className="">
                                    <p>Reajuste:</p>
                                    <p className="font-light">{sueldo.reajuste}</p>
                                </div>
                                <div className="">
                                    <p>Total Remunerativo:</p>
                                    <p className="font-light">${sueldo.totremun}</p>
                                </div>
                                <div className="">
                                    <p>Intereses:</p>
                                    <p className="font-light">${(sueldo.totremun * dato.tasaint)/100}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 pl-6 border-b pb-4 border-lightwhite place-content-stretch">
                        <div>
                            <div className="grid grid-cols-2">
                                <p className="mb-1">Tasa de Interes:</p>
                                <p className="font-light">{dato.tasaint}%</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="mb-1">Fecha de Liquidación:</p>
                                <p className="font-light">{dato.fecha}</p>
                            </div>
                            <div className="grid grid-cols-2 mb-4">
                                <p className="mb-1">Estado:</p>
                                <p className="font-light">{dato.estado}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="mb-1">Total Sueldos:</p>
                                <p className="font-light">${dato.totsueldos}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="mb-1">Intereses Sueldos:</p>
                                <p className="font-light">${(dato.totsueldos * dato.tasaint)/100}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="mb-1">Total Aporte Patronal:</p>
                                <p className="font-light">${(dato.totsueldos * 2)}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="mb-1">Intereses Aporte Patronal:</p>
                                <p className="font-light">${(dato.totsueldos * 2 * dato.tasaint)/100}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="mb-1">Total Final:</p>
                                <p className="font-light">${dato.totsueldos + (dato.totsueldos * dato.tasaint)/100 + (dato.totsueldos * 2) + (dato.totsueldos * 2 * dato.tasaint)/100}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 col-span-2 pt-4">
                        <div className="flex">
                            <p>Editado:</p>
                            <p className="font-light ml-2">{dato.firma_usuario}, {dato.edited_time}.</p>
                        </div>
                        <div className="flex justify-end items-end">
                            <div className="mr-4">
                                <button className="flex items-center justify-end py-2 px-4 cursor-pointer rounded-sm bg-red-900 transition-colors duration-300">
                                    Eliminar
                                    <i className="material-symbols-outlined ml-2 cursor-pointer">delete</i>
                                </button>
                            </div>
                            <div className="">
                                <button className="flex items-center justify-end py-2 px-4 cursor-pointer rounded-sm bg-green-900 transition-colors duration-300">
                                    Descargar
                                    <i className="material-symbols-outlined ml-2 cursor-pointer">download</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DatosObraSocial;