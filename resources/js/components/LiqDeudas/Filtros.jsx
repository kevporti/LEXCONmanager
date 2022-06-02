import React from 'react';
import ReactDOM from 'react-dom';

function Filtros() {

    
    return(
        <>
            <div className="flex w-full justify-between my-8">
                <div className="flex items-center">
                    <input className="bg-dark p-2" type="text" placeholder="Buscar deuda" />
                    <i className="material-symbols-outlined p-2 rounded-r bg-dark cursor-pointer">search</i>
                </div>
                <div className="flex items-center justify-center px-4 py-2 cursor-pointer border rounded-sm border-green-800 hover:bg-green-800 transition-colors duration-300">
                    <h1 className="mr-2">
                        Liquidar Deuda
                    </h1>
                    <i className="material-symbols-outlined">add</i>
                </div>
            </div>
            {/* {Object.values(categories).map((category, idx) => (
                category.map((cat, idx) => (
                    <div key={idx} className="flex w-full justify-between my-8">
                        <div className="flex items-center">
                            <input className="bg-dark p-2" type="text" placeholder="Buscar deuda" />
                            <i className="material-symbols-outlined p-2 rounded-r bg-dark cursor-pointer">search</i>
                        </div>
                        <div className="flex items-center justify-center px-4 py-2 cursor-pointer border rounded-sm border-green-800 hover:bg-green-800 transition-colors duration-300">
                            <h1 className="mr-2">
                                Liquidar Deuda {cat}
                            </h1>
                            <i className="material-symbols-outlined">add</i>
                        </div>
                    </div>
                ))
            ))} */}
        </>
    );
}

export default Filtros;