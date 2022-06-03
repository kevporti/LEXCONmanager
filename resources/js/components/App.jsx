import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
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
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route exact path="/usuario/empresas" element={<Empresas />} />
                <Route exact path="/usuario/contactos" element={<Contactos />} />
                <Route exact path="/usuario/empleados" element={<Empleados />} />
                <Route exact path="/usuario/moras" element={<Moras />} />
                <Route exact path="/usuario/escala_salarial" element={<EscalasSalariales />} />
                <Route exact path="/usuario/liquidacion_sueldos" element={<LiqSueldos />} />
                <Route exact path="/usuario/liquidacion_deudas/obra_social" element={<ObraSocial />} />
                <Route exact path="/usuario/liquidacion_deudas/aporte_sindical" element={<AporteSindical />} />
                <Route exact path="/usuario/actividades" element={<Actividades />} />
                <Route exact path="/usuario/perfil" element={<Cuenta />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
