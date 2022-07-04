import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function DatosEscala(id) {
    const Datos = [
        {
            id: "10",
            sueldo_basico: 0,
            firma_usuario: "Claudio",
            edited_time: "28 Mayo 2022",
            adicional_rama: 7750,
            antiguo: 2,
            extra50: 8450,
            extra100: 14250,
            carga_descarga: 12000,
            simple_presencia: 5240,
        },
        {
            id: "9",
            sueldo_basico: 50000,
            firma_usuario: "Claudio",
            edited_time: "28 Mayo 2022",
            adicional_rama: 7750,
            antiguo: 2,
            extra50: 8450,
            extra100: 14250,
            carga_descarga: 0,
            simple_presencia: 5240,
        },
        {
            id: "8",
            sueldo_basico: 0,
            firma_usuario: "Claudio",
            edited_time: "28 Mayo 2022",
            adicional_rama: 7750,
            antiguo: 2,
            extra50: 8450,
            extra100: 14250,
            carga_descarga: 12000,
            simple_presencia: 5240,
        },
        {
            id: "7",
            sueldo_basico: 50000,
            firma_usuario: "Claudio",
            edited_time: "28 Mayo 2022",
            adicional_rama: 7750,
            antiguo: 2,
            extra50: 8450,
            extra100: 14250,
            carga_descarga: 12000,
            simple_presencia: 5240,
        },
        {
            id: "6",
            sueldo_basico: 50000,
            firma_usuario: "Claudio",
            edited_time: "28 Mayo 2022",
            adicional_rama: 7750,
            antiguo: 2,
            extra50: 8450,
            extra100: 14250,
            carga_descarga: 0,
            simple_presencia: 5240,
        },
        {
            id: "5",
            sueldo_basico: 50000,
            firma_usuario: "Claudio",
            edited_time: "28 Mayo 2022",
            adicional_rama: 7750,
            antiguo: 2,
            extra50: 8450,
            extra100: 14250,
            carga_descarga: 0,
            simple_presencia: 5240,
        },
        {
            id: "4",
            sueldo_basico: 0,
            firma_usuario: "Claudio",
            edited_time: "28 Mayo 2022",
            adicional_rama: 7750,
            antiguo: 2,
            extra50: 8450,
            extra100: 14250,
            carga_descarga: 12000,
            simple_presencia: 5240,
        },
        {
            id: "3",
            sueldo_basico: 50000,
            firma_usuario: "Claudio",
            edited_time: "28 Mayo 2022",
            adicional_rama: 7750,
            antiguo: 2,
            extra50: 8450,
            extra100: 14250,
            carga_descarga: 0,
            simple_presencia: 5240,
        },
        {
            id: "2",
            sueldo_basico: 0,
            firma_usuario: "Claudio",
            edited_time: "28 Mayo 2022",
            adicional_rama: 7750,
            antiguo: 2,
            extra50: 8450,
            extra100: 14250,
            carga_descarga: 12000,
            simple_presencia: 5240,
        },
        {
            id: "1",
            sueldo_basico: 50000,
            firma_usuario: "Claudio",
            edited_time: "28 Mayo 2022",
            adicional_rama: 7750,
            antiguo: 2,
            extra50: 8450,
            extra100: 14250,
            carga_descarga: 12000,
            simple_presencia: 5240,
        },
    ];
    const [Dato, setDato] = useState([]);

    useEffect(() => {
        let Id = id.id;

        axios.post(`/api/usuario/buscarLiqSueldo`, { Id }).then((response) => {
            setDato(response.data);
        });
    }, []);
    console.log(Dato);

    return (
        <div>
            {Dato.map((dato) => (
                <div key={dato.id} className="grid grid-cols-1 gap-y-2 p-4">
                    <div className="grid grid-cols-4 border-b pb-4 border-lightwhite">
                        <div>Sueldo básico:</div>
                        <div>${dato.sueldo_neto}</div>
                        <div>Adicional por rama:</div>
                        <div>${dato.adicional_rama}</div>
                    </div>
                    <div className="grid grid-cols-4 border-b pb-4 border-lightwhite">
                        <div>Horas extra al 50%:</div>
                        <div>${dato.extra_50 * dato.hs_extra_50}</div>
                        <div>Horas extra al 100%:</div>
                        <div>${dato.extra_100 * dato.hs_extra_100}</div>
                    </div>
                    <div className="grid grid-cols-4 border-b pb-4 border-lightwhite">
                        <div>Carga y Descarga:</div>
                        <div>${dato.sueldo_neto / 24}</div>
                        <div>Simple Presencia:</div>
                        <div>${dato.simple_presencia}</div>
                    </div>
                    <div className="grid grid-cols-4 border-b pb-4 border-lightwhite">
                        <div>Años de Antigüedad:</div>
                        <div>${dato.antiguo}</div>
                        <div>Extra por antigüedad:</div>
                        <div>
                            ${(dato.sueldo_basico * dato.antiguo) / 100} (
                            {dato.antiguo}%)
                        </div>
                    </div>
                    <div className="grid grid-cols-4 border-b pb-4 border-lightwhite">
                        <div className="grid col-start-3">
                            Total Remunerativo:
                        </div>
                        <div>
                            $
                            {dato.sueldo_basico +
                                dato.adicional_rama +
                                dato.extra50 +
                                dato.extra100 +
                                dato.carga_descarga +
                                dato.simple_presencia +
                                (dato.sueldo_basico * dato.antiguo) / 100}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mt-2">
                        <div>
                            Creado: {dato.firma_usuario}, {dato.edited_time}.
                        </div>
                        <div className="grid place-content-end">
                            <button className="flex items-center justify-center py-2 px-4 cursor-pointer rounded-sm bg-green-900 transition-colors duration-300">
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
