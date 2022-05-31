import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown/Dropdown';
import { useLocation } from 'react-router-dom';


function NavSession() {
    const Titulos = [
        {title:"Empresas", link: "/usuario/empresas"},
        {title:"Empleados", link: "/usuario/empleados"},
        {title:"Moras", link: "/usuario/moras"},
        {title:"Escala Salarial", link: "/usuario/escala_salarial"},
        {title:"Liquidación de Sueldo", link: "/usuario/liquidacion_sueldos"},
        {title:"Liquidación de Deuda", link: "/usuario/liquidacion_deudas"},
        {title:"Actividades", link: "/usuario/actividades"},
        {title:"Perfil", link: "/usuario/perfil"},
    ]

    const location = useLocation();
    React.useEffect(() => {
        }, [location]);

    return (
        <div className="flex w-full justify-between items-center pb-8 border-b border-lightwhite">
            <div>
                {Titulos.filter(titulo => ((titulo.link == location.pathname) ? titulo.title : undefined)).map((filteredTitles, index) => (
                        <h1 className="text-2xl" key={index}>
                            Sección {filteredTitles.title}
                        </h1>
                    ))}
            </div>
            <Dropdown />
        </div>
    );
}


export default NavSession;