import { Dialog, Transition } from "@headlessui/react";
import { set } from "lodash";
import { Fragment, useState } from "react";

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
    let [Msg, setMsg] = useState();

    const [VigenciaEscala, setVigenciaEscala] = useState([]);
    const [CategoriaEscala, setCategoriaEscala] = useState([]);
    const [SueldoBasicoEscala, setSueldoBasicoEscala] = useState([]);
    const [Extra50Escala, setExtra50Escala] = useState([]);
    const [Extra100Escala, setExtra100Escala] = useState([]);
    const [SimplePresenciaEscala, setSimplePresenciaEscala] = useState([]);
    const [ResidenciaEscala, setResidenciaEscala] = useState([]);
    const [AutorEscala, setAutorEscala] = useState([]);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    function handleCategoriaEscala(e) {
        setCategoriaEscala(e.target.value);
    }

    async function handleForm() {
        closeModal();

        const item = {
            VigenciaEscala,
            CategoriaEscala,
            SueldoBasicoEscala,
            Extra50Escala,
            Extra100Escala,
            SimplePresenciaEscala,
            ResidenciaEscala,
            AutorEscala,
        };

        const { data } = await axios.post(
            "/api/usuario/crearEscalaSalarial",
            item
        );
        setMsg(data);
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="flex items-center justify-center px-4 py-2 cursor-pointer border rounded-sm border-green-800 hover:bg-green-800 transition-colors duration-300"
                >
                    <h1 className="mr-2">Agregar Escala</h1>
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
                                        Agregar Escala Salarial
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form className="text-sm text-gray-400 grid grid-cols-2 gap-4">
                                            <div className="grid grid-cols-1 gap-1">
                                                <span className="mr-2">
                                                    Fecha de Vigencia:
                                                </span>
                                                <input
                                                    name="VigenciaEscala"
                                                    onChange={(e) =>
                                                        setVigenciaEscala(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="month"
                                                    className="bg-darklight py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Rama/Categoría:
                                                </span>
                                                <select
                                                    className="bg-darklight py-1 px-2 rounded-sm"
                                                    name="CategoriaEscala"
                                                    value={CategoriaEscala}
                                                    onChange={(e) =>
                                                        handleCategoriaEscala(e)
                                                    }
                                                    id=""
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
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Sueldo Básico:
                                                </span>
                                                <input
                                                    name="SueldoBasicoEscala"
                                                    onChange={(e) =>
                                                        setSueldoBasicoEscala(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="text"
                                                    placeholder="Ingrese una cantidad"
                                                    className="bg-darklight py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    {CategoriaEscala == 1 ||
                                                    CategoriaEscala == 2 ||
                                                    CategoriaEscala == 3
                                                        ? "Hs x KM recorridos"
                                                        : "Horas extras al 50%:"}
                                                </span>
                                                <input
                                                    name="Extra50Escala"
                                                    onChange={(e) =>
                                                        setExtra50Escala(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="text"
                                                    placeholder="Ingrese una cantidad"
                                                    className="bg-darklight py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    {CategoriaEscala == 1 ||
                                                    CategoriaEscala == 2 ||
                                                    CategoriaEscala == 3
                                                        ? "Hs x KM recorridos 100%"
                                                        : "Horas extras al 100%:"}
                                                </span>
                                                <input
                                                    name="Extra100Escala"
                                                    onChange={(e) =>
                                                        setExtra100Escala(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="text"
                                                    placeholder="Ingrese una cantidad"
                                                    className="bg-darklight py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Simple Presencia:
                                                </span>
                                                <input
                                                    name="SimplePresenciaEscala"
                                                    onChange={(e) =>
                                                        setSimplePresenciaEscala(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="text"
                                                    placeholder="Ingrese una cantidad"
                                                    className="bg-darklight py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Permanencia fuera de
                                                    Residencia:
                                                </span>
                                                <input
                                                    name="ResidenciaEscala"
                                                    onChange={(e) =>
                                                        setResidenciaEscala(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="text"
                                                    placeholder="Ingrese una cantidad"
                                                    className="bg-darklight py-1 px-2"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1">
                                                <span className="mr-2">
                                                    Creado por:
                                                </span>
                                                <input
                                                    name="AutorEscala"
                                                    onChange={(e) =>
                                                        setAutorEscala(
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
                                            onClick={handleForm}
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
