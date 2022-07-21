import { divide } from 'lodash';
import { Dialog, Transition } from "@headlessui/react";
import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
    
function Msg(mensaje) {

    console.log(mensaje.mensaje);

    let [Mensaje, setMensaje] = useState([])
    let [isOpen, setIsOpen] = useState(true)

    setMensaje(mensaje);
    abrirMsg();

    function cerrarMsg() {
        setIsOpen(false)
    }

    function abrirMsg() {
        setIsOpen(true)
    }

    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={cerrarMsg}>
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
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div className="mt-2">
                        {Mensaje}
                    </div>

                    <div className="mt-4">
                        <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={cerrarMsg}
                        >
                        Cerrar
                        </button>
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
            </Transition>
        </div>
    );
}

export default Msg;