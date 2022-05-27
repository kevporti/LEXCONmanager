import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from "./Login/Inicio";
import Empresas from "./Usuario/Empresas";
import Empleados from "./Usuario/Empleados";
import Moras from "./Usuario/Moras";
import EscalasSalariales from "./Usuario/EscalasSalariales";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route exact path="/usuario/empresas" element={<Empresas />} />
                <Route exact path="/usuario/empleados" element={<Empleados />} />
                <Route exact path="/usuario/moras" element={<Moras />} />
                <Route exact path="/usuario/escala_salarial" element={<EscalasSalariales />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
