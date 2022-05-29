import React from 'react';
import { Disclosure } from '@headlessui/react';
import DatosEscala from './DatosEscala';

function FilaTabla() {
    const Moras = [
        {id: "10", date: "04/22"},
        {id: "9", date: "01/22"},
        {id: "8", date: "10/21"},
        {id: "7", date: "07/21"},
        {id: "6", date: "04/21"},
        {id: "5", date: "01/21"},
        {id: "4", date: "10/20"},
        {id: "3", date: "07/20"},
        {id: "2", date: "04/20"},
        {id: "1", date: "01/20"},
     ];
  return (
    <div className="h-80 overflow-auto scrollbar">
      <div className="">
        {Moras.map((mora) => (
            <Disclosure key={mora.id} as="div" className="">
            {({ open }) => (
                <>
                    <Disclosure.Button as="div" className={`flex justify-between items-center p-4 border-b border-lightwhite transition-all duration-300 hover:bg-green-900 ${
                        open ? 'bg-green-900 rounded-t' : ''
                    }`}>
                        <span className="">{mora.date}</span>
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