import { Dialog, Transition } from "@headlessui/react";
import { set } from "lodash";
import { Fragment, useState } from "react";

export default function Agregar() {
    let [isOpen, setIsOpen] = useState(false);
    let [Msg, setMsg] = useState();

    const [VigenciaEscala, setVigenciaEscala] = useState([]);
    const [CategoriaEscala, setCategoriaEscala] = useState("1");
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
        console.log(data);
        setMsg(data);
    }

    const Categorias = [
        { id: "8", name: "Chofer 1ra" },
        { id: "7", name: "Chofer 2da" },
        { id: "6", name: "Chofer 3ra" },
        { id: "5", name: "Correo" },
        { id: "4", name: "Cereal" },
        { id: "3", name: "Logica" },
        { id: "2", name: "Logica 2" },
        { id: "1", name: "Logica 3" },
    ];

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
                                                    type="date"
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
                                                    {Categorias.map(
                                                        (categoria) => (
                                                            <option
                                                                key={
                                                                    categoria.id
                                                                }
                                                                className="bg-darklight rounded-sm py-1 px-2 focus:outline-none text-white"
                                                                name={
                                                                    categoria.name
                                                                }
                                                                value={
                                                                    categoria.id
                                                                }
                                                            >
                                                                {categoria.name}
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
                                                    Horas extras al 50%:
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
                                                    Horas extras al 100%:
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
