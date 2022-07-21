import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Msg from "../Msg";

function DatosEscala(id) {
    const Id = id.id;

    const [Empresa, setEmpresa] = useState([]);
    const [msg, setMsg] = useState("");

    function formatDate(string) {
        var options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(string).toLocaleDateString([], options);
    }

    useEffect(() => {
        axios
            .post(`http://127.0.0.1:8000/api/usuario/datosEmpresas`, { id })
            .then((response) => {
                setEmpresa(response.data);
            });
    }, []);

    async function eliminarHandler(e) {
        e.preventDefault();

        await axios
            .delete(`http://127.0.0.1:8000/api/usuario/empresas/eliminar/${Id}`)
            .then((response) => {
                setMsg(response.data);
            });
    }

    return (
        <div>
            {msg != '' ? <Msg mensaje={msg} /> : null}
            {Empresa.map((dato) => (
                <div
                    key={dato.id_empresa}
                    className="grid grid-cols-1 gap-y-2 p-4"
                >
                    <div className="grid grid-cols-3 border-b pb-4 border-lightwhite">
                        <div className="">
                            <p>Domicilio:</p>
                            <p className="font-light">{dato.domicilio}</p>
                        </div>
                        <div className="">
                            <p>Cod. Postal:</p>
                            <p className="font-light">{dato.cod_postal}</p>
                        </div>
                        <div className="">
                            <p>Localidad, provincia y país:</p>
                            <p className="font-light">
                                {dato.localidad}, {dato.provincia}, {dato.pais}.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 pt-4">
                        <div className="flex">
                            <p>Editado:</p>
                            <p className="font-light ml-2">
                                {dato.firma_usuario},{" "}
                                {formatDate(dato.updated_at)}.
                            </p>
                        </div>
                        <div className="grid col-start-3 grid-cols-4">
                            <div className="grid col-start-2">
                                <button
                                    type="submit"
                                    onClick={eliminarHandler}
                                    className="flex items-center justify-end py-2 px-4 cursor-pointer rounded-sm bg-red-900 transition-colors duration-300"
                                >
                                    Eliminar
                                    <i className="material-symbols-outlined ml-2 cursor-pointer">
                                        delete
                                    </i>
                                </button>
                            </div>
                            <div className="grid col-start-4">
                                <button
                                    type="submit"
                                    className="flex items-center justify-end py-2 px-4 cursor-pointer rounded-sm bg-green-900 transition-colors duration-300"
                                >
                                    Editar
                                    <i className="material-symbols-outlined ml-2 cursor-pointer">
                                        edit
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

export default DatosEscala;
