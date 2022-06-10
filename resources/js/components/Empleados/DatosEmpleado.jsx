import React, { useState, useEffect }from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function DatosEmpleado(id) {

    const [Empleado, setEmpleado] = useState([]);
    const Id = id.id;

    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    async function deleteEmpleado() {
        await axios.delete(`http://127.0.0.1:8000/api/usuario/empleados/eliminar/${Id}`)
            .then(response => {
                console.log(response.data);
                window.location.reload();
            }
        );
    }
    
    useEffect(() => {
        let Id = id.id;
        
        axios.post(`http://127.0.0.1:8000/api/usuario/datosEmpleados`, {Id})
        .then(response => {
          setEmpleado(response.data);
          });
      }, []);
    
    return(
        <div>
            <div className="grid grid-cols-1 gap-y-2 p-4">
                <div className="grid grid-cols-3 border-b pb-4 border-lightwhite">
                    <div className="">
                        <p>Fecha de Alta:</p>
                        <p className="font-light">{Empleado.fecha_alta}</p>
                    </div>
                    <div className="">
                        <p>Fecha de Baja:</p>
                        <p className="font-light">{Empleado.fecha_baja ? Empleado.fecha_baja : "Actualmente trabajando."}</p>
                    </div>
                    <div className="">
                        <p>Rama/Categoría:</p>
                        <p className="font-light">{Empleado.id_rama_categoria}</p>
                    </div>
                </div>
                <div className="white-space-pre-line border-b pb-4 border-lightwhite">
                    <p className="mb-1">Motivo Reclamo:</p>
                    <p className="font-light">{Empleado.motivo_reclamo}</p>
                </div>
                <div className="grid grid-cols-3 pt-4">
                    <div className="flex">
                        <p>Editado:</p>
                        <p className="font-light ml-2">{Empleado.firma_usuario}, {formatDate(Empleado.updated_at)}.</p>
                    </div>
                    <div className="grid col-start-3 grid-cols-4">
                        <div className="grid col-start-2">
                            <button 
                                onClick={deleteEmpleado}
                                className="flex items-center justify-end py-2 px-4 cursor-pointer rounded-sm bg-red-900 transition-colors duration-300">
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
        </div>
    );
}

export default DatosEmpleado;