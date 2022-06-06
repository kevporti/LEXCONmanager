import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';

function Login() {

    const [Usuario, setUsuario] = useState("");
    const [Contraseña, setContraseña] = useState("");


    async function login(e) {
        e.preventDefault();
        let item = {Usuario, Contraseña};

        let result = await axios.post("http://127.0.0.1:8000/api/comprobarsesion", item);
        console.log(result);
        
    
    }

    return (
        <div className="text-white p-8 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 border border-darklight rounded max-w-lg w-full bg-darklight">
            <div className="mx-12">
                <h1 className="font-medium text-xl">INICIAR SESIÓN</h1>
                <hr className="border-white" />
            </div>
            <form className="pt-8 mx-12" action="">
                <div>
                    <div className="relative flex">
                        <Input name="Usuario" type="text" setType={setUsuario} Tipo={Usuario} />
                    </div>
                </div>
                <div className="mt-5">
                    <div className="relative flex">
                        <Input name="Contraseña" type="password" setType={setContraseña} Tipo={Contraseña} />
                    </div>
                </div>
                <div className="flex justify-center mt-8 mx-16">
                    <button 
                        onClick={login}
                        className="grow px-8 py-2 text-lg tracking-wide flex justify-center border border-green-800 hover:bg-green-800 transition-colors duration-300">
                        Iniciar Sesión
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;