import { useState } from 'react';
import { Tab } from '@headlessui/react';
import TablaHeader from './TablaHeader';
import FilaTabla from './FilaTabla';
import Filtros from './Filtros';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  let [categories] = useState({
    "Obra Social": [
      {
        id: 1,
        Titulo: 'Obra Social 1',
        Fecha: '5h ago',
      },
      {
        id: 2,
        Titulo: "2da Obra Social",
        Fecha: '2h ago',
      },
    ],
    "Aporte Sindical": [
      {
        id: 1,
        Titulo: 'Aporte Sindical 1',
        Fecha: 'Jan 7',
      },
      {
        id: 2,
        Titulo: '2do Aporte Sindical',
        Fecha: 'Mar 19',
      },
    ],
  })

  let categorie = [
    {id: 1, title: "Obra Social"},
    {id: 2, title: "Aporte Sindical"},
  ]

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
                  selected ? 'bg-lightwhite shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white')}>
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}>
                  <Filtros /> 
                  <div className="rounded-sm bg-darklight border border-lightwhite">
                      <TablaHeader posts={posts} />
                      <FilaTabla posts={posts} />
                  </div>
              </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}


{/* <Tab.Group>
  <Tab.List className="flex space-x-1 rounded-sm bg-dark p-1">
    {categorie.map((category, idx) => (
      <Tab 
        key={category.id} 
        className={({ selected }) =>
          classNames(
            'w-full rounded-sm py-2.5 text-sm font-bold leading-5 text-white',
            selected ? 'bg-lightwhite shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white')}>
      {category.title}
      </Tab>
    ))}
  </Tab.List>
  <Tab.Panels className="mt-2">
    {}
  </Tab.Panels>
</Tab.Group> */}





