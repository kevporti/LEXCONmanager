import { Dialog, Transition } from '@headlessui/react';
import { set } from 'lodash';
import { Fragment, useState } from 'react';


export default function Agregar() {
  let [isOpen, setIsOpen] = useState(false)
  const [msg, setMsg] = useState('');

  const [Empresas, setEmpresas] = useState([]);
  const [empresaContacto, setempresaContacto] = useState("1");
  const [nombreContacto, setnombreContacto] = useState([]);
  const [cargoContacto, setcargoContacto] = useState([]);
  const [telefonoContacto, settelefonoContacto] = useState([]);
  const [emailContacto, setemailContacto] = useState([]);
  const [firmaUsuarioContacto, setfirmaUsuarioContacto] = useState([]);


  function handleChangeSelect(e) {
    setempresaContacto(e.target.value)
  }


  async function handleContacto(e) {
    let item = {empresaContacto, nombreContacto, cargoContacto, telefonoContacto, emailContacto, firmaUsuarioContacto};
    console.log(item);
    await axios.post('http://127.0.0.1:8000/api/usuario/agregarContactos', item)
      .then(response => {
        setMsg(response.data.success);
        window.location.reload();
      });
  }
  
  async function getEmpresas(e) {

    await axios.get('http://127.0.0.1:8000/api/usuario/empresas')
      .then(response => {
        setEmpresas(response.data);
      });
    }

  function closeModal(e) {
    setIsOpen(false)

    handleContacto(e)
  }

  function openModal(e) {
    setIsOpen(true)
    getEmpresas(e)
  }


  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="flex items-center justify-center px-4 py-2 cursor-pointer border rounded-sm border-green-800 hover:bg-green-800 transition-colors duration-300">
            <h1 className="mr-2">
                Agregar Contacto
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
                    Agregar Contacto
                  </Dialog.Title>
                  <div className="mt-2">
                  <h1 className="text-red-700 text-lg">{msg}</h1>
                    <form className="text-sm text-gray-400 grid grid-cols-2 gap-4">
                        <div className="grid grid-cols-1 gap-1">
                            <span className="mr-2">Empresa:</span>
                            <select value={empresaContacto} onChange={handleChangeSelect} className="bg-darklight rounded-sm py-1 px-2 focus:outline-none">
                              {Empresas.map(empresa => (
                                <option 
                                  className="bg-darklight rounded-sm py-1 px-2 focus:outline-none text-white" 
                                  value={empresa.id_empresa}>
                                    {empresa.nombre_empresa}
                                </option>
                              ))}
                            </select>
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Nombre y Apellido:</span>
                            <input name="nombreContacto" onChange={e => setnombreContacto(e.target.value)} type="text" className="bg-darklight py-1 px-2 rounded-sm" placeholder="Ingrese un nombre" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Cargo:</span>
                            <input onChange={e => setcargoContacto(e.target.value)} name="cargoContacto" placeholder="Ingrese el cargo que representa" className="bg-darklight rounded-sm py-1 px-2 focus:outline-none" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Teléfono:</span>
                            <input onChange={e => settelefonoContacto(e.target.value)} name="telefonoContacto" type="text" placeholder="Ingrese un número de teléfono" className="bg-darklight py-1 px-2" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Email:</span>
                            <input onChange={e => setemailContacto(e.target.value)} name="emailContacto" type="email" placeholder="Ingrese el email" className="bg-darklight py-1 px-2" />
                        </div>
                        <div className="grid grid-cols-1">
                            <span className="mr-2">Creado por:</span>
                            <input onChange={e => setfirmaUsuarioContacto(e.target.value)} name="firmaUsuarioContacto" type="text" placeholder="Ingrese su nombre" className="bg-darklight py-1 px-2" />
                        </div>
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-sm bg-green-800 hover:bg-green-900 px-4 py-2 text-sm font-medium text-white"
                      onClick={closeModal}>
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