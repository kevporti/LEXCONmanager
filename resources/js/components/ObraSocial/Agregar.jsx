import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

export default function Agregar() {
    let [isOpen, setIsOpen] = useState(false);
    const [Empresas, setEmpresas] = useState([]);
    const [Empleados, setEmpleados] = useState([]);

    const [Empresa, setEmpresa] = useState([]);
    const [Empleado, setEmpleado] = useState([]);
    const [PeriodoDesde, setPeriodoDesde] = useState([]);
    const [PeriodoHasta, setPeriodoHasta] = useState([]);
    const [TasaInteres, setTasaInteres] = useState([]);
    const [FechaLiq, setFechaLiq] = useState([]);
    const [Autor, setAutor] = useState([]);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
        getEmpresas();
    }

    async function getEmpresas() {
        const { data } = await axios.get("/api/usuario/empresas");
        setEmpresas(data);
    }

    function handleSelectEmpresa(e) {
        setEmpresa(e.target.value);
    }

    function handleSelectEmpleado(e) {
        setEmpleado(e.target.value);
    }

    useEffect(() => {
        let Id = { Id: Empresa };
        setEmpleado([]);

        axios.post(`/api/usuario/empleadosPorEmpresa`, Id).then((response) => {
            setEmpleados(response.data);
        });
    }, [Empresa]);

    async function handleObraSocial() {
        const item = {
            Empresa,
            Empleado,
            PeriodoDesde,
            PeriodoHasta,
            TasaInteres,
            FechaLiq,
            Autor,
        };
        const { data } = await axios.post(
            "/api/usuario/liquidacion_deudas/agregarObraSocial",
            item
        );
        console.log(data);
        // window.location.reload();
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="flex items-center justify-center px-4 py-2 cursor-pointer border rounded-sm border-green-800 hover:bg-green-800 transition-colors duration-300"
                >
                    <h1 className="mr-2">Liquidar Deuda</h1>
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
                                        Liquidar Deuda - Obra Social
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form className="text-sm text-gray-400 grid grid-cols-2 gap-4">
                                            <div className="grid grid-cols-1 gap-1">
                                                <span className="mr-2">
                                                    Empresa:
                                                </span>
                                                <select
                                                    value={Empresa}
                                                    onChange={
                                                        handleSelectEmpresa
                                                    }
                                                    className="bg-darklight rounded-sm py-1 px-2"
                                                >
                                                    <option
                                                        className="hidden"
                                                        value="0"
                                                    >
                                                        --Por favor, selecciona
                                                        una empresa--
                                                    </option>
                                                    {Empresas.map((empresa) => (
                                                        <option
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
                                                    Empleados:
                                                </span>
                                                <select
                                                    value={Empleado}
                                                    onChange={
                                                        handleSelectEmpleado
                                                    }
                                                    className="bg-darklight py-1 px-2 rounded-sm focus:outline-none scrollbar"
                                                >
                                                    <option
                                                        className="hidden"
                                                        value="0"
                                                    >
                                                        --Por favor, selecciona
                                                        un empleado--
                                                    </option>
                                                    {Empleados.map(
                                                        (empleado) => (
                                                            <option
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
                                                    Período desde:
                                                </span>
                                                <input
                                                    onChange={(e) =>
                                                        setPeriodoDesde(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={PeriodoDesde}
                                                    type="month"
                                                    className="bg-darklight py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Período hasta (inclusive):
                                                </span>
                                                <input
                                                    onChange={(e) =>
                                                        setPeriodoHasta(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={PeriodoHasta}
                                                    type="month"
                                                    className="bg-darklight py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Tasa de Interes:
                                                </span>
                                                <input
                                                    onChange={(e) =>
                                                        setTasaInteres(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={TasaInteres}
                                                    type="number"
                                                    placeholder="Ingrese un porcentaje"
                                                    className="bg-darklight py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Fecha de Liquidación:
                                                </span>
                                                <input
                                                    onChange={(e) =>
                                                        setFechaLiq(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={FechaLiq}
                                                    type="month"
                                                    className="bg-darklight py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Creado por:
                                                </span>
                                                <input
                                                    onChange={(e) =>
                                                        setAutor(e.target.value)
                                                    }
                                                    value={Autor}
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
                                            onClick={handleObraSocial}
                                        >
                                            Liquidar
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
