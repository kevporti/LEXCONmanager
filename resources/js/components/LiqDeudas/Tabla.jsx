import { useState } from 'react';
import { Tab } from '@headlessui/react';
import FilaTabla from './FilaTabla';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    "Obra Social": [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    "Aporte Sindical": [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
  })

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-sm bg-dark p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-sm py-2.5 text-sm font-bold leading-5 text-white',
                  selected
                    ? 'bg-lightwhite shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className='rounded-sm bg-darklight border border-lightwhite'>
                <div>
                    <div className="px-4 py-2 border-b border-lightwhite bg-dark grid grid-cols-4">
                        <div className="grid place-content-start">
                            Fecha
                        </div>
                        <div className="grid place-content-start">
                            Empleado
                        </div>
                        <div className="grid place-content-start">
                            Empresa
                        </div>
                        <div className="grid place-content-end">
                            Opciones
                        </div>
                    </div>
                    <FilaTabla posts={posts} />
                </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}