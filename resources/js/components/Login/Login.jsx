import React from 'react';
import ReactDOM from 'react-dom';

function Login() {
    return (
        <div className="text-white bg-newGray p-4 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 border border-white rounded-sm">
            <div>
                <h1 className="font-medium text-xl">INICIAR SESION</h1>
                <hr className="border-white" />
            </div>
            <form className="flex justify-center items-center p-8" action="">
            <div className="">
                <div className="">
                    Usuario:
                </div>
                <div>
                    <input className="border border-white" type="text" placeholder="Nombre de Usuario..." />
                </div>
            </div>
            </form>
        </div>
    );
}

export default Login;