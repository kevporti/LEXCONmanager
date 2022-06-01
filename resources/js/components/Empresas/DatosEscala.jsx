import React from 'react';
import ReactDOM from 'react-dom';

function DatosEscala(id) {

    const Datos = [
        {id: "10", country: 'Argentina', firma_usuario: "Claudio", edited_time: "28 Mayo", domicilio: "Ituzaingo 1963", postal_code: "2000", localidad: "Rosario", prov: "Santa Fe", razon_social: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "9", country: 'Argentina', firma_usuario: "Claudio", edited_time: "28 Mayo", domicilio: "Ituzaingo 1963", postal_code: "2000", localidad: "Rosario", prov: "Santa Fe", razon_social: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "8", country: 'Argentina', firma_usuario: "Claudio", edited_time: "28 Mayo", domicilio: "Ituzaingo 1963", postal_code: "2000", localidad: "Rosario", prov: "Santa Fe", razon_social: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "7", country: 'Argentina', firma_usuario: "Claudio", edited_time: "28 Mayo", domicilio: "Ituzaingo 1963", postal_code: "2000", localidad: "Rosario", prov: "Santa Fe", razon_social: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "6", country: 'Argentina', firma_usuario: "Claudio", edited_time: "28 Mayo", domicilio: "Ituzaingo 1963", postal_code: "2000", localidad: "Rosario", prov: "Santa Fe", razon_social: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "5", country: 'Argentina', firma_usuario: "Claudio", edited_time: "28 Mayo", domicilio: "Ituzaingo 1963", postal_code: "2000", localidad: "Rosario", prov: "Santa Fe", razon_social: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "4", country: 'Argentina', firma_usuario: "Claudio", edited_time: "28 Mayo", domicilio: "Ituzaingo 1963", postal_code: "2000", localidad: "Rosario", prov: "Santa Fe", razon_social: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "3", country: 'Argentina', firma_usuario: "Claudio", edited_time: "28 Mayo", domicilio: "Ituzaingo 1963", postal_code: "2000", localidad: "Rosario", prov: "Santa Fe", razon_social: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "2", country: 'Argentina', firma_usuario: "Claudio", edited_time: "28 Mayo", domicilio: "Ituzaingo 1963", postal_code: "2000", localidad: "Rosario", prov: "Santa Fe", razon_social: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "1", country: 'Argentina', firma_usuario: "Claudio", edited_time: "28 Mayo", domicilio: "Ituzaingo 1963", postal_code: "2000", localidad: "Rosario", prov: "Santa Fe", razon_social: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como les pinte asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
    ]
    
    return(
        <div>
            {Datos.filter(dato => dato.id == id.id).map((dato) => (
                <div key={dato.id} className="grid grid-cols-1 gap-y-2 p-4">
                    <div className="white-space-pre-line border-b pb-4 border-lightwhite">
                        <p className="font-medium mb-1">Razón Social:</p>
                        <p className="font-light">{dato.razon_social}</p>
                    </div>
                    <div className="grid grid-cols-3 border-b pb-4 border-lightwhite">
                        <div className="">
                            <p>Domicilio:</p>
                            <p className="font-light">{dato.domicilio}</p>
                        </div>
                        <div className="">
                            <p>Cod. Postal:</p>
                            <p className="font-light">{dato.postal_code}</p>
                        </div>
                        <div className="">
                            <p>Localidad, provincia y país:</p>
                            <p className="font-light">{dato.localidad}, {dato.prov}, {dato.country}.</p>
                        </div>
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

export default DatosEscala;