import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function FilaTabla() {
    const [Moras, setMoras] = useState([]);

    useEffect(() => {
        axios.get("/api/usuario/moras").then((response) => {
            setMoras(response.data);
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
            {Moras.map((mora) => (
                <div
                    key={mora.id_mora}
                    className="grid grid-cols-12 px-4 border-b border-lightwhite p-2"
                >
                    <div className="col-span-3">{mora.nombre_empresa}</div>
                    <div className="col-span-3">{mora.nombre_y_apellido}</div>
                    <div className="grid col-span-2 place-content-end">
                        {mora.id_mora}
                    </div>
                    <div className="grid place-content-end col-span-2">
                        {formatDate(mora.mes_año)}
                    </div>
                    <div className="grid place-content-end col-span-2">
                        <i className="material-symbols-outlined cursor-pointer text-red-500">
                            delete
                        </i>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FilaTabla;
