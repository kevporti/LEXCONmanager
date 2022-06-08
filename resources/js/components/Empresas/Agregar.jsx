import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import InputCountries from './InputCountries';

export default function Agregar() {
  let [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState('');

  const [nombreEmpresa, setnombreEmpresa] = useState("");
  const [cuitEmpresa, setcuitEmpresa] = useState("");
  const [razonSocialEmpresa, setrazonSocialEmpresa] = useState("");
  const [telefonoEmpresa, settelefonoEmpresa] = useState("");
  const [codigoPostalEmpresa, setcodigoPostalEmpresa] = useState("");
  const [paisEmpresa, setpaisEmpresa] = useState("");
  const [provinciaEmpresa, setprovinciaEmpresa] = useState("");
  const [localidadEmpresa, setlocalidadEmpresa] = useState("");
  const [domicilioEmpresa, setdomicilioEmpresa] = useState("");
  const [firmaUsuario, setfirmaUsuario] = useState("");

  function closeModal(e) {
    setIsOpen(false)
  }

  async function handleForm(e) {
    let item = {nombreEmpresa, cuitEmpresa, razonSocialEmpresa, telefonoEmpresa, codigoPostalEmpresa, paisEmpresa, provinciaEmpresa, localidadEmpresa, domicilioEmpresa, firmaUsuario};

    await axios.post("http://127.0.0.1:8000/api/usuario/empresas/agregar", item).then(response => {
      if (response.data.success) {
        window.location.reload();
      } else {
        setMsg(response.data.fail);
      }
    })
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
          className="flex items-center justify-center px-4 py-2 cursor-pointer border rounded-sm border-green-800 hover:bg-green-800 transition-colors duration-300">
            <h1 className="mr-2">
                Agregar Empresa
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
                    Agregar Empresa
                  </Dialog.Title>
                  <div className="mt-2">
                    <h3 className="text-red-700 text-lg">{msg}</h3>
                    <form className="text-sm text-gray-400 grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-1 gap-1">
                            <span className="mr-2">Nombre:</span>
                            <input 
                              onChange={e => setnombreEmpresa(e.target.value)}
                              name="nombreEmpresa" 
                              type="text" 
                              className="bg-darklight py-1 px-2" 
                              placeholder="Ingrese un nombre" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">CUIT:</span>
                            <input 
                              onChange={e => setcuitEmpresa(e.target.value)}
                              name="cuitEmpresa" 
                              type="number" 
                              className="bg-darklight py-1 px-2 rounded-sm" 
                              placeholder="Ingrese un número de cuit" />
                        </div>
                        <div className="grid col-span-2 grid-cols-1">
                            <span className="mr-2">Razón Social:</span>
                            <textarea 
                              onChange={e => setrazonSocialEmpresa(e.target.value)}
                              name="razonSocialEmpresa" rows="4" cols="40" 
                              placeholder="Ingrese un texto" 
                              className="bg-darklight rounded-sm py-1 px-2 focus:outline-none" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Teléfono:</span>
                            <input 
                              onChange={e => settelefonoEmpresa(e.target.value)}
                              name="telefonoEmpresa" 
                              type="text" 
                              placeholder="Ingrese un número de teléfono" 
                              className="bg-darklight py-1 px-2" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Cod. Postal:</span>
                            <input 
                              onChange={e => setcodigoPostalEmpresa(e.target.value)}
                              name="codigoPostalEmpresa" 
                              type="text" 
                              placeholder="Ingrese un código postal" 
                              className="bg-darklight py-1 px-2" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">País:</span>
                            <InputCountries setType={setpaisEmpresa} type={paisEmpresa} />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Provincia:</span>
                            <input 
                              onChange={e => setprovinciaEmpresa(e.target.value)}
                              name="provinciaEmpresa" 
                              type="text" 
                              placeholder="Ingrese la provincia" 
                              className="bg-darklight py-1 px-2" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Localidad:</span>
                            <input 
                              onChange={e => setlocalidadEmpresa(e.target.value)}
                              name="localidadEmpresa" 
                              type="text" 
                              placeholder="Ingrese la localidad" 
                              className="bg-darklight py-1 px-2" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Domicilio:</span>
                            <input 
                              onChange={e => setdomicilioEmpresa(e.target.value)}
                              name="domicilioEmpresa" 
                              type="text" 
                              placeholder="Ingrese el domicilio" 
                              className="bg-darklight py-1 px-2" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Creado por:</span>
                            <input 
                              onChange={e => setfirmaUsuario(e.target.value)}
                              name="firmaUsuario" 
                              type="text" 
                              placeholder="Ingrese su nombre" 
                              className="bg-darklight py-1 px-2" />
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
  )
}