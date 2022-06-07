import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from "./Login/Inicio";
import Empresas from "./Usuario/Empresas";
import Contactos from "./Usuario/Contactos";
import Empleados from "./Usuario/Empleados";
import Moras from "./Usuario/Moras";
import EscalasSalariales from "./Usuario/EscalasSalariales";
import LiqSueldos from "./Usuario/LiqSueldos";
import ObraSocial from "./Usuario/ObraSocial";
import AporteSindical from "./Usuario/AporteSindical";
import Actividades from "./Usuario/Actividades";
import Cuenta from "./Usuario/Cuenta";


function App() {
    function redirect() {
        let storage = sessionStorage.key("id");
        if (sessionStorage.getItem("id")){
            return 1;
        } else {
            return 0;
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={redirect() == 0 ? <Inicio /> : <Navigate to="/usuario/empresas" />} />
                <Route exact path="/usuario/empresas" element={redirect() == 1 ? <Empresas /> : <Navigate to="/" />} />
                <Route exact path="/usuario/contactos" element={redirect() == 1 ? <Contactos /> : <Navigate to="/" />} />
                <Route exact path="/usuario/empleados" element={redirect() == 1 ? <Empleados /> : <Navigate to="/" />} />
                <Route exact path="/usuario/moras" element={redirect() == 1 ? <Moras /> : <Navigate to="/" />} />
                <Route exact path="/usuario/escala_salarial" element={redirect() == 1 ? <EscalasSalariales /> : <Navigate to="/" />} />
                <Route exact path="/usuario/liquidacion_sueldos" element={redirect() == 1 ? <LiqSueldos /> : <Navigate to="/" />} />
                <Route exact path="/usuario/liquidacion_deudas/obra_social" element={redirect() == 1 ? <ObraSocial /> : <Navigate to="/" />} />
                <Route exact path="/usuario/liquidacion_deudas/aporte_sindical" element={redirect() == 1 ? <AporteSindical /> : <Navigate to="/" />} />
                <Route exact path="/usuario/actividades" element={redirect() == 1 ? <Actividades /> : <Navigate to="/" />} />
                <Route exact path="/usuario/perfil" element={redirect() == 1 ? <Cuenta /> : <Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
