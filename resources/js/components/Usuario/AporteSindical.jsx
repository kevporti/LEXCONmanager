import React from 'react';
import ReactDOM from 'react-dom';
import Aside from '../Navigation/Aside';
import Home from '../AporteSindical/Home';

function AporteSindical() {

    return(
        <div className="flex text-white bg-darklight h-full">
            <Aside />
            <Home />
        </div>
    );
}


export default AporteSindical;