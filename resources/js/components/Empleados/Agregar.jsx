import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import axios from "axios";

export default function Agregar() {
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

    let [isOpen, setIsOpen] = useState(false);
    const [Msg, setMsg] = useState([]);
    const [Empresas, setEmpresas] = useState([]);

    const [EmpresaEmpleado, setEmpresaEmpleado] = useState([]);
    const [CategoriaEmpleado, setCategoriaEmpleado] = useState([]);
    const [NombreEmpleado, setNombreEmpleado] = useState([]);
    const [DNIEmpleado, setDNIEmpleado] = useState([]);
    const [MotivoReclamoEmpleado, setMotivoReclamoEmpleado] = useState([]);
    const [TelefonoEmpleado, setTelefonoEmpleado] = useState([]);
    const [FechaAltaEmpleado, setFechaAltaEmpleado] = useState([]);
    const [FechaBajaEmpleado, setFechaBajaEmpleado] = useState();
    const [AutorEmpleado, setAutorEmpleado] = useState([]);

    function closeModal() {
        handleEmpleado();
        setIsOpen(false);
    }

    function openModal(e) {
        getEmpresas(e);

        setIsOpen(true);
    }

    function handleCategoriaSelect(e) {
        setCategoriaEmpleado(e.target.value);
    }

    function handleEmpresaSelect(e) {
        setEmpresaEmpleado(e.target.value);
    }

    function getEmpresas(e) {
        e.preventDefault();

        axios
            .get("http://127.0.0.1:8000/api/usuario/empresas")
            .then((response) => {
                setEmpresas(response.data);
            });
    }

    async function handleEmpleado() {
        let item = {
            EmpresaEmpleado,
            CategoriaEmpleado,
            NombreEmpleado,
            DNIEmpleado,
            MotivoReclamoEmpleado,
            TelefonoEmpleado,
            FechaAltaEmpleado,
            FechaBajaEmpleado,
            AutorEmpleado,
        };

        await axios
            .post("http://127.0.0.1:8000/api/usuario/agregarEmpleados", item)
            .then((response) => {
                if (response.data.success) {
                    setMsg(response.data.success);
                    window.location.reload();
                } else {
                    setMsg(response.data.fail);
                }
            });
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="flex items-center px-4 py-2 cursor-pointer border rounded-sm border-green-800 hover:bg-green-800 transition-colors duration-300"
                >
                    <h1 className="mr-2">Agregar Empleado</h1>
                    <i className="material-symbols-outlined">add</i>
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full text-white max-w-2xl transform overflow-hidden rounded border-2 border-lightwhite bg-dark p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 mb-4"
                                    >
                                        Agregar Empleado
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form className="text-sm text-gray-400 grid grid-cols-2 gap-4">
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Empresa:
                                                </span>
                                                <select
                                                    value={EmpresaEmpleado}
                                                    onChange={
                                                        handleEmpresaSelect
                                                    }
                                                    className="bg-darklight rounded-sm py-1 px-2 focus:outline-none"
                                                >
                                                    <option
                                                        className="hidden"
                                                        value=""
                                                    >
                                                        --Por favor, selecciona
                                                        una empresa--
                                                    </option>
                                                    {Empresas.map((empresa) => (
                                                        <option
                                                            key={
                                                                empresa.id_empresa
                                                            }
                                                            className="bg-darklight rounded-sm py-1 px-2 focus:outline-none text-white"
                                                            name={
                                                                empresa.nombre_empresa
                                                            }
                                                            value={
                                                                empresa.id_empresa
                                                            }
                                                        >
                                                            {
                                                                empresa.nombre_empresa
                                                            }
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Rama/Categoría:
                                                </span>
                                                <select
                                                    value={CategoriaEmpleado}
                                                    onChange={
                                                        handleCategoriaSelect
                                                    }
                                                    className="bg-darklight rounded-sm py-1 px-2 focus:outline-none"
                                                >
                                                    <option
                                                        className="hidden"
                                                        value=""
                                                    >
                                                        --Por favor, selecciona
                                                        una categoría--
                                                    </option>
                                                    {RamaCategoria.map(
                                                        (categoria) => (
                                                            <option
                                                                key={
                                                                    categoria.id
                                                                }
                                                                className="bg-darklight rounded-sm py-1 px-2 focus:outline-none text-white"
                                                                name={
                                                                    categoria.rama
                                                                }
                                                                value={
                                                                    categoria.id
                                                                }
                                                            >
                                                                {categoria.rama}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            <div className="grid grid-cols-1 gap-1">
                                                <span className="mr-2">
                                                    Nombre y Apellido:
                                                </span>
                                                <input
                                                    name="NombreEmpleado"
                                                    onChange={(e) =>
                                                        setNombreEmpleado(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="text"
                                                    className="bg-darklight py-1 px-2"
                                                    placeholder="Ingrese un nombre"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    DNI:
                                                </span>
                                                <input
                                                    name="DNIEmpleado"
                                                    onChange={(e) =>
                                                        setDNIEmpleado(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="number"
                                                    className="bg-darklight py-1 px-2 rounded-sm"
                                                    placeholder="Ingrese un número de dni"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 col-span-2">
                                                <span className="mr-2">
                                                    Motivo de Reclamo:
                                                </span>
                                                <textarea
                                                    name="MotivoReclamoEmpleado"
                                                    rows="4"
                                                    cols="40"
                                                    onChange={(e) =>
                                                        setMotivoReclamoEmpleado(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Ingrese un texto"
                                                    className="bg-darklight rounded-sm py-1 px-2 focus:outline-none"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Teléfono:
                                                </span>
                                                <input
                                                    name="TelefonoEmpleado"
                                                    onChange={(e) =>
                                                        setTelefonoEmpleado(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="text"
                                                    placeholder="Ingrese un número de teléfono"
                                                    className="bg-darklight rounded-sm py-1 px-2 focus:outline-none"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Fecha de Alta:
                                                </span>
                                                <input
                                                    name="FechaAltaEmpleado"
                                                    onChange={(e) =>
                                                        setFechaAltaEmpleado(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="date"
                                                    className="bg-darklight py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Fecha de Baja:
                                                </span>
                                                <input
                                                    name="FechaBajaEmpleado"
                                                    onChange={(e) =>
                                                        setFechaBajaEmpleado(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="date"
                                                    className="bg-darklight py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Creado por:
                                                </span>
                                                <input
                                                    name="AutorEmpleado"
                                                    onChange={(e) =>
                                                        setAutorEmpleado(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="text"
                                                    placeholder="Ingrese su nombre"
                                                    className="bg-darklight py-1 px-2"
                                                />
                                            </div>
                                        </form>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-sm bg-green-800 hover:bg-green-900 px-4 py-2 text-sm font-medium text-white"
                                            onClick={closeModal}
                                        >
                                            Agregar
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
