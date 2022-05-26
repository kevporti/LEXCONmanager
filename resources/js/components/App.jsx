import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from "./Login/Inicio";
import Empresas from "./Usuario/Empresas";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route exact path="/usuario/empresas" element={<Empresas />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
