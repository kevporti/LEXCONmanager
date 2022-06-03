import React from 'react';
import ReactDOM from 'react-dom';

function DatosEscala(id) {

    const Datos = [
        {id: "10", tel_contacto: '+54 9 341 3349561', firma_usuario: "Claudio", edited_time: "28 Mayo", deuda: "50000", date: "Agosto 2022", forma: "12 cuotas sin interes", email: "challengerenlol@gmail.com", obs: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "9", tel_contacto: '+54 9 341 3349587', firma_usuario: "Claudio", edited_time: "28 Mayo", deuda: "50000", date: "Agosto 2022", forma: "12 cuotas sin interes", email: "challengerenlol@gmail.com", obs: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "8", tel_contacto: '+54 9 341 3349561', firma_usuario: "Claudio", edited_time: "28 Mayo", deuda: "50000", date: "Agosto 2022", forma: "12 cuotas sin interes", email: "challengerenlol@gmail.com", obs: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "7", tel_contacto: '+54 9 341 4456789', firma_usuario: "Claudio", edited_time: "28 Mayo", deuda: "50000", date: "Agosto 2022", forma: "12 cuotas sin interes", email: "challengerenlol@gmail.com", obs: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "6", tel_contacto: '+54 9 341 5678495', firma_usuario: "Claudio", edited_time: "28 Mayo", deuda: "50000", date: "Agosto 2022", forma: "12 cuotas sin interes", email: "challengerenlol@gmail.com", obs: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "5", tel_contacto: '+54 9 341 3349561', firma_usuario: "Claudio", edited_time: "28 Mayo", deuda: "50000", date: "Agosto 2022", forma: "12 cuotas sin interes", email: "challengerenlol@gmail.com", obs: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "4", tel_contacto: '+54 9 341 3349561', firma_usuario: "Claudio", edited_time: "28 Mayo", deuda: "50000", date: "Agosto 2022", forma: "12 cuotas sin interes", email: "challengerenlol@gmail.com", obs: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "3", tel_contacto: '+54 9 341 2264895', firma_usuario: "Claudio", edited_time: "28 Mayo", deuda: "50000", date: "Agosto 2022", forma: "12 cuotas sin interes", email: "challengerenlol@gmail.com", obs: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "2", tel_contacto: '+54 9 341 3349561', firma_usuario: "Claudio", edited_time: "28 Mayo", deuda: "50000", date: "Agosto 2022", forma: "12 cuotas sin interes", email: "challengerenlol@gmail.com", obs: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
        {id: "1", tel_contacto: '+54 9 341 6657489', firma_usuario: "Claudio", edited_time: "28 Mayo", deuda: "50000", date: "Agosto 2022", forma: "12 cuotas sin interes", email: "challengerenlol@gmail.com", obs: "Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla.Acá va a ir el texto de las observaciones que obviamente puede llegar a ser tan largo como quieran asi que estoy escribiendo esto de prueba àra ver como va a quedar el conenido dentro de la tabla."},
    ]
    
    return(
        <div>
            {Datos.filter(dato => dato.id == id.id).map((dato) => (
                <div key={dato.id} className="grid grid-cols-1 gap-y-2 p-4">
                    <div className="grid grid-cols-3 border-b pb-4 border-lightwhite">
                        <div className="">
                            Teléfono:  {dato.tel_contacto}
                        </div>
                        <div className="">
                            Email:  {dato.email}
                        </div>
                        <div className="">
                            Editado:  {dato.firma_usuario}, {dato.edited_time}.
                        </div>
                    </div>
                    <div className="white-space-pre-line border-b pb-4 border-lightwhite">
                        <p className="font-medium mb-1">Observaciones:</p> {dato.obs}
                    </div>
                    <div className="grid grid-cols-12 mt-4">
                        <button className="flex items-center justify-center py-2 px-4 cursor-pointer rounded-sm bg-green-900 transition-colors duration-300">
                            Editar
                            <i className="material-symbols-outlined ml-2 cursor-pointer">edit</i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DatosEscala;