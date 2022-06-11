import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { get } from "lodash";

export default function Agregar() {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        handleMora();
        setIsOpen(false);
    }

    function openModal(e) {
        getEmpresas(e).then((response) => {
            setEmpresas(response.data);
        });

        setIsOpen(true);
    }

    const [Empresas, setEmpresas] = useState([]);
    const [Empleados, setEmpleados] = useState([]);
    const [EmpresaMora, setEmpresaMora] = useState(0);
    const [EmpleadoEmpresaMora, setEmpleadoEmpresaMora] = useState([]);
    const [FechaDesdeMora, setFechaDesdeMora] = useState([]);
    const [FechaHastaMora, setFechaHastaMora] = useState([]);
    const [AutorMora, setAutorMora] = useState([]);

    async function getEmpresas(e) {
        e.preventDefault();

        const { data } = await axios.get("/api/usuario/empresas");

        setEmpresas(data);
    }

    function handleSelectEmpresa(e) {
        setEmpresaMora(e.target.value);
    }

    function handleSelectEmpleado(e) {
        setEmpleadoEmpresaMora(e.target.value);
    }

    useEffect(() => {
        let Id = { Id: EmpresaMora };

        axios.post(`/api/usuario/empleadosPorEmpresa`, Id).then((response) => {
            setEmpleados(response.data);
        });
    }, [EmpresaMora]);

    function handleMora() {
        let item = {
            EmpresaMora,
            EmpleadoEmpresaMora,
            FechaDesdeMora,
            FechaHastaMora,
            AutorMora,
        };
        axios.post("/api/usuario/agregarMoras", item).then((response) => {
            console.log(response.data);
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
                    <h1 className="mr-2">Agregar Mora</h1>
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
                                        Agregar Mora
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form className="text-sm text-gray-400 grid grid-cols-2 gap-4">
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Empresa:
                                                </span>
                                                <select
                                                    value={EmpresaMora}
                                                    onChange={
                                                        handleSelectEmpresa
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
                                                    Empleado:
                                                </span>
                                                <select
                                                    value={EmpleadoEmpresaMora}
                                                    onChange={
                                                        handleSelectEmpleado
                                                    }
                                                    className="bg-darklight rounded-sm py-1 px-2 focus:outline-none"
                                                >
                                                    <option
                                                        className="hidden"
                                                        value=""
                                                    >
                                                        --Por favor, selecciona
                                                        un empleado--
                                                    </option>
                                                    {Empleados.map(
                                                        (empleado) => (
                                                            <option
                                                                key={
                                                                    empleado.id_empleado
                                                                }
                                                                className="bg-darklight rounded-sm py-1 px-2 focus:outline-none text-white"
                                                                name={
                                                                    empleado.nombre_y_apellido
                                                                }
                                                                value={
                                                                    empleado.id_empleado
                                                                }
                                                            >
                                                                {
                                                                    empleado.nombre_y_apellido
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Desde:
                                                </span>
                                                <input
                                                    name="FechaDesdeMora"
                                                    onChange={(e) =>
                                                        setFechaDesdeMora(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="month"
                                                    className="bg-darklight rounded-sm py-1 px-2 focus:outline-none"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Hasta (inclusive):
                                                </span>
                                                <input
                                                    name="FechaHastaMora"
                                                    onChange={(e) =>
                                                        setFechaHastaMora(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="month"
                                                    className="bg-darklight rounded-sm py-1 px-2 focus:outline-none"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Creado por:
                                                </span>
                                                <input
                                                    name="AutorMora"
                                                    onChange={(e) =>
                                                        setAutorMora(
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
