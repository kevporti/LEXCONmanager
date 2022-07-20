import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function DatosObraSocial(id) {
    const Datos = [
        {
            id: "10",
            estado: "Cobrado",
            firma_usuario: "Claudio",
            edited_time: "28 Mayo",
            fecha: "14/10/2021",
            tasaint: 3.72,
            totsueldos: 150000,
        },
        {
            id: "9",
            estado: "No Cobrado",
            firma_usuario: "Claudio",
            edited_time: "28 Mayo",
            fecha: "14/10/2021",
            tasaint: 3.72,
            totsueldos: 150000,
        },
        {
            id: "8",
            estado: "No Cobrado",
            firma_usuario: "Claudio",
            edited_time: "28 Mayo",
            fecha: "14/10/2021",
            tasaint: 3.72,
            totsueldos: 150000,
        },
        {
            id: "7",
            estado: "No Cobrado",
            firma_usuario: "Claudio",
            edited_time: "28 Mayo",
            fecha: "14/10/2021",
            tasaint: 3.72,
            totsueldos: 150000,
        },
        {
            id: "6",
            estado: "Cobrado",
            firma_usuario: "Claudio",
            edited_time: "28 Mayo",
            fecha: "14/10/2021",
            tasaint: 3.72,
            totsueldos: 150000,
        },
        {
            id: "5",
            estado: "No Cobrado",
            firma_usuario: "Claudio",
            edited_time: "28 Mayo",
            fecha: "14/10/2021",
            tasaint: 3.72,
            totsueldos: 150000,
        },
        {
            id: "4",
            estado: "No Cobrado",
            firma_usuario: "Claudio",
            edited_time: "28 Mayo",
            fecha: "14/10/2021",
            tasaint: 3.72,
            totsueldos: 150000,
        },
        {
            id: "3",
            estado: "Cobrado",
            firma_usuario: "Claudio",
            edited_time: "28 Mayo",
            fecha: "14/10/2021",
            tasaint: 3.72,
            totsueldos: 150000,
        },
        {
            id: "2",
            estado: "No Cobrado",
            firma_usuario: "Claudio",
            edited_time: "28 Mayo",
            fecha: "14/10/2021",
            tasaint: 3.72,
            totsueldos: 150000,
        },
        {
            id: "1",
            estado: "Cobrado",
            firma_usuario: "Claudio",
            edited_time: "28 Mayo",
            fecha: "14/10/2021",
            tasaint: 3.72,
            totsueldos: 150000,
        },
    ];

    const Sueldos = [
        { id: 1, name: "Franco L. Duarte", totremun: 30000, reajuste: "Si" },
        { id: 1, name: "Franco L. Duarte", totremun: 65000, reajuste: "No" },
        { id: 1, name: "Franco L. Duarte", totremun: 65000, reajuste: "No" },
        { id: 1, name: "Franco L. Duarte", totremun: 30000, reajuste: "Si" },
        { id: 1, name: "Franco L. Duarte", totremun: 30000, reajuste: "Si" },
    ];

    const [DatosObra, setDatosObra] = useState([]);
    const [DatosLiqObra, setDatosLiqObra] = useState([]);
    const Id = id.id;

    useEffect(() => {
        axios
            .post("/api/usuario/liquidacion_deudas/datosLiqObra", { Id })
            .then((response) => {
                setDatosLiqObra(response.data);
            });
    }, []);

    useEffect(() => {
        axios
            .post("/api/usuario/liquidacion_deudas/datosObra", { Id })
            .then((response) => {
                setDatosObra(response.data);
            });
    }, []);

    function ContadorMeses(date1, date2) {
        var start = date1.split("-");
        var end = date2.split("-");
        var startYear = parseInt(start[0]);
        var endYear = parseInt(end[0]);
        var dates = [];

        for (var i = startYear; i <= endYear; i++) {
            var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
            var startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
            for (
                var j = startMon;
                j <= endMonth;
                j = j > 12 ? j % 12 || 11 : j + 1
            ) {
                var month = j + 1;
                var displayMonth = month < 10 ? "0" + month : month;
                dates.push([i, displayMonth, "01"].join("-"));
            }
        }
        return dates.length;
    }

    function InteresSueldo(dato) {
        let contador = 0;
        let result = DatosLiqObra.map((sueldo) => {
            contador =
                (ContadorMeses(sueldo.mes_año, dato.fechaLiquidacionObra) *
                    dato.tasaInteresObra *
                    sueldo.totalRemunerativo *
                    0.03) /
                    100 +
                contador;
            contador = Math.round((contador + Number.EPSILON) * 100) / 100;
        });

        return contador;
    }

    function formatDate(string) {
        var options = {
            year: "numeric",
            month: "long",
            timeZone: "UTC",
        };
        const date = new Date(string).toLocaleDateString("es-AR", options);

        return date.charAt(0).toUpperCase() + date.slice(1);
    }

    function formatDate(string) {
        var options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(string).toLocaleDateString([], options);
    }

    async function deleteObra(id) {
        const { data } = await axios.delete(
            `/api/usuario/liquidacion_deudas/eliminarObra/${id}`
        );
        window.location.reload();
    }

    return (
        <div>
            {DatosObra.map((dato) => (
                <div
                    key={dato.id_obra_social}
                    className="grid grid-cols-2 gap-y-2 p-4"
                >
                    <div className="border-b border-r pb-4 border-lightwhite">
                        {DatosLiqObra.map((sueldo) => (
                            <div className="grid grid-cols-2 py-2">
                                <div className="">
                                    <p>Empleado:</p>
                                    <p className="font-light">
                                        {sueldo.nombre_y_apellido}
                                    </p>
                                </div>
                                <div className="">
                                    <p>Reajuste:</p>
                                    <p className="font-light">
                                        {sueldo.reajuste == 0 ? "No" : "Si"}
                                    </p>
                                </div>
                                <div className="">
                                    <p>Total Remunerativo:</p>
                                    <p className="font-light">
                                        $
                                        {(
                                            sueldo.totalRemunerativo * 0.03
                                        ).toFixed(2)}
                                    </p>
                                </div>
                                <div className="">
                                    <p>Intereses:</p>
                                    <p className="font-light">
                                        $
                                        {(
                                            sueldo.totalRemunerativo *
                                            0.03 *
                                            (dato.tasaInteresObra / 100) *
                                            ContadorMeses(
                                                sueldo.mes_año,
                                                dato.fechaLiquidacionObra
                                            )
                                        ).toFixed(2)}
                                    </p>
                                </div>
                                <div>Fecha deuda:</div>
                                <div className="font-light">
                                    {formatDate(sueldo.mes_año)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 pl-6 border-b pb-4 border-lightwhite place-content-stretch">
                        <div>
                            <div className="grid grid-cols-2">
                                <p className="mb-1">Tasa de Interes:</p>
                                <p className="font-light">
                                    {dato.tasaInteresObra}%
                                </p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="mb-1">Fecha de Liquidación:</p>
                                <p className="font-light">
                                    {dato.fechaLiquidacionObra}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 mb-4">
                                <p className="mb-1">Estado:</p>
                                <p className="font-light">{dato.statusObra}</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="mb-1">Total Sueldos:</p>
                                <p className="font-light">
                                    ${dato.subtotalObra}
                                </p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="mb-1">Intereses Sueldos:</p>
                                <p className="font-light">
                                    ${InteresSueldo(dato)}
                                </p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="mb-1">Total Aporte Patronal:</p>
                                <p className="font-light">
                                    ${dato.subtotalPatronalObra}
                                </p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="mb-1">
                                    Intereses Aporte Patronal:
                                </p>
                                <p className="font-light">
                                    ${InteresSueldo(dato) * 2}
                                </p>
                            </div>
                            <div className="grid grid-cols-2">
                                <p className="mb-1">Total Final:</p>
                                <p className="font-light">
                                    $
                                    {dato.totalFinalObra +
                                        InteresSueldo(dato) * 3}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 col-span-2 pt-4">
                        <div className="flex">
                            <p>Editado:</p>
                            <p className="font-light ml-2">
                                {dato.firma_usuario},{" "}
                                {formatDate(dato.updated_at)}.
                            </p>
                        </div>
                        <div className="flex justify-end items-end">
                            <div className="mr-4">
                                <button
                                    onClick={() =>
                                        deleteObra(dato.id_obra_social)
                                    }
                                    className="flex items-center justify-end py-2 px-4 cursor-pointer rounded-sm bg-red-900 transition-colors duration-300"
                                >
                                    Eliminar
                                    <i className="material-symbols-outlined ml-2 cursor-pointer">
                                        delete
                                    </i>
                                </button>
                            </div>
                            <div className="">
                                <button className="flex items-center justify-end py-2 px-4 cursor-pointer rounded-sm bg-green-900 transition-colors duration-300">
                                    Descargar
                                    <i className="material-symbols-outlined ml-2 cursor-pointer">
                                        download
                                    </i>
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
