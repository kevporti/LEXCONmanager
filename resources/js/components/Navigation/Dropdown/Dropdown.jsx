/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { NavLink, useNavigate } from 'react-router-dom';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {

  let history = useNavigate();


  function logout(e) {
    e.preventDefault();
    sessionStorage.removeItem("id")
    window.location.reload();
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center px-4 py-2 focus:outline-none">
          Administrador
          <i className="material-symbols-outlined py-2 px-4" aria-hidden="true">expand_more</i>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-dark ring-1 ring-lightwhite ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/usuario/perfil"
                  className={classNames(
                    active ? 'bg-lightwhite text-white font-medium' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Perfil
                </a>
              )}
            </Menu.Item>
            <form action="">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    onClick={logout}
                    className={classNames(
                      active ? 'bg-lightwhite text-white font-medium' : 'text-white',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Salir
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}