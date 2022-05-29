import React from 'react';
import { Disclosure } from '@headlessui/react';
// import DatosEscala from './DatosEscala';

function FilaTabla() {
    const Sueldos = [
        {id: "10", name: "Josesito", company: "Samsung", date: "04/22"},
        {id: "9", name: "Josesito", company: "Samsung", date: "01/22"},
        {id: "8", name: "Josesito", company: "Samsung", date: "10/21"},
        {id: "7", name: "Josesito", company: "Samsung", date: "07/21"},
        {id: "6", name: "Josesito", company: "Samsung", date: "04/21"},
        {id: "5", name: "Josesito", company: "Samsung", date: "01/21"},
        {id: "4", name: "Josesito", company: "Samsung", date: "10/20"},
        {id: "3", name: "Josesito", company: "Samsung", date: "07/20"},
        {id: "2", name: "Josesito", company: "Samsung", date: "04/20"},
        {id: "1", name: "Josesito", company: "Samsung", date: "01/20"},
     ];
  return (
    <div className="h-80 overflow-auto scrollbar">
      <div className="">
        {Sueldos.map((sueldo) => (
            <Disclosure key={sueldo.id} as="div" className="">
            {({ open }) => (
                <>
                    <Disclosure.Button as="div" className={`grid grid-cols-4 p-4 border-b border-lightwhite transition-all duration-300 hover:bg-green-900 ${
                        open ? 'bg-green-900 rounded-t' : ''
                    }`}>
                        <div>
                            <span className="">{sueldo.date}</span>
                        </div>
                        <div>
                            {sueldo.name}
                        </div>
                        <div>
                            {sueldo.company}
                        </div>
                        <div className="grid place-content-end">
                            <i
                                className={`material-symbols-outlined grid place-content-end ${
                                open ? 'rotate-180 transform' : ''
                                } h-5 w-5`}
                            >expand_more
                            </i>
                        </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-white bg-lightwhite rounded-b">
                        {/* <DatosEscala index={sueldo.id} /> */}
                        hola
                    </Disclosure.Panel>
                </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

export default FilaTabla;