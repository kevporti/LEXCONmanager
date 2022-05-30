import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from "./Login/Inicio";
import Empresas from "./Usuario/Empresas";
import Empleados from "./Usuario/Empleados";
import Moras from "./Usuario/Moras";
import EscalasSalariales from "./Usuario/EscalasSalariales";
import LiqSueldos from "./Usuario/LiqSueldos";
import LiqDeudas from "./Usuario/LiqDeudas";
import Cuenta from "./Usuario/Cuenta";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route exact path="/usuario/empresas" element={<Empresas />} />
                <Route exact path="/usuario/empleados" element={<Empleados />} />
                <Route exact path="/usuario/moras" element={<Moras />} />
                <Route exact path="/usuario/escala_salarial" element={<EscalasSalariales />} />
                <Route exact path="/usuario/liquidacion_sueldos" element={<LiqSueldos />} />
                <Route exact path="/usuario/liquidacion_deudas" element={<LiqDeudas />} />
                <Route exact path="/usuario/perfil" element={<Cuenta />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
