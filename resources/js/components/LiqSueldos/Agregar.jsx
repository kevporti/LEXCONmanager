import { Dialog, Transition } from "@headlessui/react";
import { set } from "lodash";
import { Fragment, useState, useEffect } from "react";

export default function Agregar() {
    let [isOpen, setIsOpen] = useState(false);

    const [Empresas, setEmpresas] = useState([]);
    const [Empleados, setEmpleados] = useState([]);

    const [Empresa, setEmpresa] = useState([]);
    const [Empleado, setEmpleado] = useState([]);
    const [FechaDesde, setFechaDesde] = useState([]);
    const [FechaHasta, setFechaHasta] = useState([]);
    const [Reajuste, setReajuste] = useState(0);
    const [SueldoBasico, setSueldoBasico] = useState([]);
    const [Extra50, setExtra50] = useState([]);
    const [Extra100, setExtra100] = useState([]);
    const [SimplePresencia, setSimplePresencia] = useState([]);
    const [PermFueraResid, setPermFueraResid] = useState([]);
    const [CargaDescarga, setCargaDescarga] = useState([]);
    const [Autor, setAutor] = useState([]);

    async function handleLiq() {
        let item = {
            Empresa,
            Empleado,
            FechaDesde,
            FechaHasta,
            Reajuste,
            SueldoBasico,
            Extra50,
            Extra100,
            SimplePresencia,
            PermFueraResid,
            CargaDescarga,
            Autor,
        };

        const { data } = await axios.post(
            "/api/usuario/agregarLiqSueldo",
            item
        );
        console.log(data);
        // window.location.reload();
    }

    async function getEmpresas(e) {
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

    function closeModal() {
        setIsOpen(false);
    }

    function openModal(e) {
        getEmpresas(e);

        setIsOpen(true);
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="flex items-center justify-center px-4 py-2 cursor-pointer border rounded-sm border-green-800 hover:bg-green-800 transition-colors duration-300"
                >
                    <h1 className="mr-2">Liquidar Sueldos</h1>
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
                                        Liquidar Sueldos
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form className="text-sm text-gray-400 grid grid-cols-2 gap-4">
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Empresa:
                                                </span>
                                                <select
                                                    value={Empresa}
                                                    onChange={
                                                        handleSelectEmpresa
                                                    }
                                                    className="bg-darklight rounded-sm py-1 px-2 focus:outline-none"
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
                                                    Empleado:
                                                </span>
                                                <select
                                                    value={Empleado}
                                                    onChange={
                                                        handleSelectEmpleado
                                                    }
                                                    className="bg-darklight rounded-sm py-1 px-2 focus:outline-none"
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
                                                    Liquidar Desde:
                                                </span>
                                                <input
                                                    onChange={(e) =>
                                                        setFechaDesde(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={FechaDesde}
                                                    type="month"
                                                    className="bg-darklight rounded-sm py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Liquidar Hasta:
                                                </span>
                                                <input
                                                    onChange={(e) =>
                                                        setFechaHasta(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={FechaHasta}
                                                    type="month"
                                                    className="bg-darklight rounded-sm py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid col-span-2 place-content-start">
                                                <div className="flex">
                                                    <input
                                                        onChange={(e) => {
                                                            if (
                                                                e.target
                                                                    .checked ==
                                                                false
                                                            ) {
                                                                setReajuste(0);
                                                            } else {
                                                                setReajuste(1);
                                                            }
                                                        }}
                                                        value={Reajuste}
                                                        type="checkbox"
                                                    />
                                                    <span className="ml-2">
                                                        Reajuste
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Sueldo Básico:
                                                </span>
                                                <input
                                                    onChange={(e) =>
                                                        setSueldoBasico(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={SueldoBasico}
                                                    type="number"
                                                    className="bg-darklight rounded-sm py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Hs Extra 50%:
                                                </span>
                                                <input
                                                    onChange={(e) =>
                                                        setExtra50(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={Extra50}
                                                    type="number"
                                                    placeholder="Ingrese las horas extra"
                                                    className="bg-darklight rounded-sm py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Hs Extra 100%:
                                                </span>
                                                <input
                                                    onChange={(e) =>
                                                        setExtra100(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={Extra100}
                                                    type="number"
                                                    placeholder="Ingrese las horas extra"
                                                    className="bg-darklight rounded-sm py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Simple Presencia:
                                                </span>
                                                <input
                                                    onChange={(e) =>
                                                        setSimplePresencia(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={SimplePresencia}
                                                    type="number"
                                                    placeholder="Ingrese la cantidad"
                                                    className="bg-darklight rounded-sm py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Permanencia fuera de
                                                    Residencia:
                                                </span>
                                                <input
                                                    onChange={(e) =>
                                                        setPermFueraResid(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={PermFueraResid}
                                                    type="number"
                                                    placeholder="Ingrese la cantidad"
                                                    className="bg-darklight rounded-sm py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Carga y Descarga:
                                                </span>
                                                <input
                                                    onChange={(e) =>
                                                        setCargaDescarga(
                                                            e.target.value
                                                        )
                                                    }
                                                    value={CargaDescarga}
                                                    type="number"
                                                    placeholder="Ingrese la cantidad"
                                                    className="bg-darklight rounded-sm py-1 px-2"
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

                                    <div className="mt-4 flex justify-between">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-sm bg-green-800 hover:bg-green-900 px-4 py-2 text-sm font-medium text-white"
                                            onClick={handleLiq}
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
