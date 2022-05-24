import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


function Aside() {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Empresas", src: "business_center", link: "/usuario/empresas" },
        { title: "Empleados", src: "person", link: "/usuario/empleados" },
        { title: "Moras", src: "gbadge", link: "/usuario/moras" },
        { title: "Escala Salarial", src: "monitoring", gap: true, link: "/usuario/escala_salarial" },
        { title: "Liquidación de Sueldo", src: "request_quote", gap: true, link: "/usuario/liquidacion_sueldos"},
        { title: "Liquidación de Deuda", src: "description", link: "/usuario/liquidacion_deudas" },
        { title: "Cuenta", src: "account_circle", gap: true, link: "/usuario/perfil" },
    ];

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
            <div className="flex gap-x-4 items-center">
                <img 
                    className={["bg-green-800 h-12 w-12 cursor-pointer duration-500"]
                    .join(" ")} src="" />
                <h1 
                    className={["text-white origin-left font-medium text-xl duration-300", 
                    !open && "scale-0"]
                    .join(" ")}
                    >Grupo Alear SRL
                </h1>
            </div>
            
            {/* List of the pages to navigate through the site */}
            <ul className="pt-6">
                {Menus.map((menu, index) => (
                    <Link to={menu.link}>
                        <li 
                            key={index} 
                            className={["flex p-2 items-center gap-x-4 cursor-pointer hover:bg-lightwhite rounded-md", 
                            menu.gap ? "mt-9" : "mt-2"]
                            .join(" ")}>
                            <i 
                                className="material-symbols-outlined"
                            >
                                {menu.src}
                            </i>
                            <span 
                                className={["origin-left duration-200",
                                !open && "hidden"]
                                .join(" ")}
                            >
                                {menu.title}
                            </span>
                        </li>
                    </Link>
                ))}
            </ul>

        </div>
    );


}

export default Aside;