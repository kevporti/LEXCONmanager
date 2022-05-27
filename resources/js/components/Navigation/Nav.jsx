import React from 'react';
import ReactDOM from 'react-dom';

function Nav() {
    return (
        <>
            <div className="flex place-content-between text-white px-8">
                <div className="flex justify-center items-center content-start">
                    <img className="px-8 py-6" src="/storage/icono.png" />
                </div>
                <div className="flex items-center">
                    <a className="font-medium px-8 py-2 border-2 rounded-sm border-green-800 hover:bg-green-800 transition-colors duration-300" href="">Login</a>
                </div>
            </div>
            <hr className="border-gray-200 block mx-8" />
        </>
    );   
}

export default Nav;