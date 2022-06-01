import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';


function Aside() {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Empresas", src: "business_center", link: "/usuario/empresas" },
        { title: "Empleados", src: "person", link: "/usuario/empleados" },
        { title: "Moras", src: "badge", link: "/usuario/moras" },
        { title: "Escala Salarial", src: "monitoring", gap: true, link: "/usuario/escala_salarial" },
        { title: "Liquidación de Sueldo", src: "request_quote", gap: true, link: "/usuario/liquidacion_sueldos"},
        { title: "Liquidación de Deuda", src: "description", link: "/usuario/liquidacion_deudas" },
        { title: "Actividades", src: "apps", gap: true, link: "/usuario/actividades" },
        { title: "Cuenta", src: "account_circle", link: "/usuario/perfil" },
    ];
    const location = useLocation();
    React.useEffect(() => {
        }, [location]);

    let gap = `flex p-2 items-center gap-x-4 cursor-pointer rounded-md mt-9 hover:bg-lightwhite`;
    let noGap = `flex p-2 items-center gap-x-4 cursor-pointer rounded-md mt-2 hover:bg-lightwhite`;

    return (
        <div 
            className={["relative w-72 h-screen p-4 pt-8 bg-dark duration-300",
            open ? "w-72" : "w-20"]
            .join(" ")}>

            {/* Button to make the aside bigger or not.  */}
            <i 
                className={["material-symbols-outlined absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark bg-darklight", 
                !open && "rotate-180" ]
                .join(" ")}
                onClick={()=>setOpen(!open)}
            >
                chevron_left
            </i>

            {/* Name of the company */}
            <div className="flex items-center">
                <img 
                    className={[" cursor-pointer duration-500"]
                    .join(" ")} src="/storage/icono.png" />
            </div>
            
            {/* List of the pages to navigate through the site */}
            <ul className="pt-6">
                {Menus.map((menu, index) => (
                    <NavLink
                        to={menu.link}
                        key={index} 
                        >
                            <div className={`${menu.gap ? gap : noGap} ${(location.pathname == menu.link) ? "bg-lightwhite" : undefined}`}>
                                <i 
                                    className="material-symbols-outlined"
                                >
                                    {menu.src}
                                </i>
                                <span 
                                    className={`origin-left duration-200
                                    ${!open && "hidden"}`}
                                >
                                    {menu.title}
                                </span>
                            </div>
                    </NavLink>
                ))}
            </ul>

        </div>
    );


}

export default Aside;