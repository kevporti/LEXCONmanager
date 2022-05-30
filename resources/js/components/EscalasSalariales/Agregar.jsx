import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function Agregar() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="flex items-center">
            <h1 className="mr-2">
                Agregar Escala
            </h1>
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
                            <span className="mr-2">Fecha de Vigencia:</span>
                            <input type="date" className="bg-darklight py-1 px-2" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Rama/Categoría:</span>
                            <select className="bg-darklight py-1 px-2 rounded-sm" name="" id="">
                                <option value="">Chofer de 1ra</option>
                                <option value="">Chofer de 2da</option>
                                <option value="">Chofer de 3ra</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Sueldo Básico:</span>
                            <input type="text" placeholder="Ingrese una cantidad" className="bg-darklight py-1 px-2" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Horas extras al 50%:</span>
                            <input type="text" placeholder="Ingrese una cantidad" className="bg-darklight py-1 px-2" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Horas extras al 100%:</span>
                            <input type="text" placeholder="Ingrese una cantidad" className="bg-darklight py-1 px-2" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Simple Presencia:</span>
                            <input type="text" placeholder="Ingrese una cantidad" className="bg-darklight py-1 px-2" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Permanencia fuera de Residencia:</span>
                            <input type="text" placeholder="Ingrese una cantidad" className="bg-darklight py-1 px-2" />
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
  )
}