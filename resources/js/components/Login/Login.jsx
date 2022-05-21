import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';

function Login() {

    return (
        <div className="text-white p-8 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 border border-darklight rounded max-w-lg w-full bg-darklight">
            <div className="mx-12">
                <h1 className="font-medium text-xl">INICIAR SESIÓN</h1>
                <hr className="border-white" />
            </div>
            <form className="pt-8 mx-12" action="">
                <div>
                    <div className="relative flex">
                        <Input name="Usuario" type="text"/>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="relative flex">
                        <Input name="Contraseña" type="password" />
                    </div>
                </div>
                <div className="flex justify-center mt-8 mx-16">
                    <button className="grow px-8 py-2 text-lg tracking-wide flex justify-center border border-green-800 hover:bg-green-800 transition-colors duration-300">
                        Iniciar Sesión
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;