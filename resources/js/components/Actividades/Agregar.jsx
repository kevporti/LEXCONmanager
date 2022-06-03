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

  const Empresas = [
    { id: 10, company: "Samsung"},
    { id: 9, company: "Apple"},
    { id: 8, company: "Microsoft"},
    { id: 7, company: "Camino"},
    { id: 6, company: "Xiaomi"},
    { id: 5, company: "Constrictor"},
    { id: 4, company: "HyperX"},
    { id: 3, company: "Sony"},
    { id: 2, company: "Visa"},
    { id: 1, company: "Liliana"},
  ]

  const Contactos = [
    { id: 8, name: "Ramiro Ramirez"},
    { id: 7, name: "Ramiro Rodriguez"},
    { id: 6, name: "Ramiro Flavio"},
    { id: 5, name: "Autito Descapotable"},
    { id: 4, name: "Mnedoza "},
    { id: 3, name: "Rosario Molina"},
    { id: 2, name: "Jaun Gabriel"},
    { id: 1, name: "Cristian F"},
  ]

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="flex items-center px-4 py-2 cursor-pointer border rounded-sm border-green-800 hover:bg-green-800 transition-colors duration-300">
            <h1 className="mr-2">
                Agregar Actividad
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
                    Agregar Actividad
                  </Dialog.Title>
                  <div className="mt-2">
                    <form className="text-sm text-gray-400 grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Empresa:</span>
                            <select className="bg-darklight rounded-sm py-1 px-2 focus:outline-none">
                              {Empresas.map(empresa => (
                                <option 
                                  className="bg-darklight rounded-sm py-1 px-2 focus:outline-none text-white" 
                                  name={empresa.id} 
                                  value={empresa.company}>
                                    {empresa.company}
                                </option>
                              ))}
                            </select>
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Contacto:</span>
                            <select className="bg-darklight rounded-sm py-1 px-2 focus:outline-none">
                              {Contactos.map(contacto => (
                                <option 
                                  className="bg-darklight rounded-sm py-1 px-2 focus:outline-none text-white" 
                                  name={contacto.id} 
                                  value={contacto.name}>
                                    {contacto.name}
                                </option>
                              ))}
                            </select>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                            <span className="mr-2">Estado:</span>
                            <select className="bg-darklight py-1 px-2 focus:outline-none" placeholder="Ingrese un nombre">
                                <option className="bg-darklight rounded-sm py-1 px-2 focus:outline-none text-white" value="Intimado">Intimado</option>
                                <option className="bg-darklight rounded-sm py-1 px-2 focus:outline-none text-white" value="Intimado">Intimado</option>
                                <option className="bg-darklight rounded-sm py-1 px-2 focus:outline-none text-white" value="Intimado">Intimado</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Fecha:</span>
                            <input type="date" className="bg-darklight py-1 px-2 rounded-sm" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Teléfono:</span>
                            <input type="text" placeholder="Ingrese un número de teléfono" className="bg-darklight rounded-sm py-1 px-2 focus:outline-none" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Email:</span>
                            <input type="email" className="bg-darklight py-1 px-2" placeholder="Email del contacto" />
                        </div>
                        <div className="grid col-span-2 grid-cols-1">
                            <span className="mr-2">Observaciones:</span>
                            <textarea rows="3" className="bg-darklight py-1 px-2 focus:outline-none" placeholder="Ingrese una breve descripción"/>
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Creado por:</span>
                            <input type="text" placeholder="Ingrese su nombre" className="bg-darklight py-1 px-2" />
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