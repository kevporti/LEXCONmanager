import React from 'react';
import ReactDOM from 'react-dom';

function Content() {
    
    return(
        <div className="p-4">
            <h1 className="text-2xl">
                Total Mensual
            </h1>
            <div className="grid grid-cols-1">
                <div>
                    <h1>Deuda a Cobrar</h1>
                    <div className="w-full grid grid-cols-2 border border-lightwhite rounded">
                        <div>
                            hola
                        </div>
                        <div>
                            hola1
                        </div>
                    </div>
                </div>
                <div>
                    <h1>Deudas Cobradas</h1>
                </div>
                <div>
                    <h1>Deuda a Cobrar</h1>
                </div>

            </div>
        </div>
    );
}

export default Content;