import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from "./Login/Inicio";
import Aside from "./Navigation/Aside";

import Home from './Empresas/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />   
            </Routes>
            {/* <Route path="/usuario/empresas">
                <div className="flex text-white bg-darklight h-screen">
                    <Aside />
                    <Home />
                </div>
            </Route>
            <Route path="/usuario/empleados">
                <Login />
            </Route> */}
        </BrowserRouter>
    );
}

export default App;
