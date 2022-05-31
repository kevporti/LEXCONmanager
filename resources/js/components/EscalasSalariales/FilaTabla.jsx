import React from 'react';
import { Disclosure } from '@headlessui/react';
import DatosEscala from './DatosEscala';

function FilaTabla() {
    const Moras = [
        {id: "10", date: "Abril 2022"},
        {id: "9", date: "Enero 2022"},
        {id: "8", date: "Octubre 2021"},
        {id: "7", date: "Julio 2021"},
        {id: "6", date: "Abril 2021"},
        {id: "5", date: "Enero 2021"},
        {id: "4", date: "Octubre 2020"},
        {id: "3", date: "Junio 2020"},
        {id: "2", date: "Abril 2020"},
        {id: "1", date: "Enero 2020"},
     ];
  return (
    <div className="h-80 overflow-auto scrollbar">
      <div className="">
        {Moras.map((mora) => (
            <Disclosure key={mora.id} as="div" className="">
            {({ open }) => (
                <>
                    <Disclosure.Button as="div" className={`flex justify-between items-center p-4 border-b border-lightwhite transition-all duration-300 hover:bg-green-900 ${
                        open ? 'bg-green-900 rounded-t cursor-pointer' : 'cursor-pointer'
                    }`}>
                        <span className="font-medium">{mora.date}</span>
                        <i
                            className={`material-symbols-outlined ${
                            open ? 'rotate-180 transform' : ''
                            } h-5 w-5`}
                        >expand_more
                        </i>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-white bg-lightwhite rounded-b">
                        <DatosEscala index={mora.id} />
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