import React from 'react';
import ReactDOM from 'react-dom';
import NavSession from '../Navigation/NavSession';
import Content from './Content';

function Home() {

    return(
        <div className="p-8 bg-darklight h-full w-full px-20">
            <NavSession />
            <Content />
        </div>
    );
}

export default Home;