import React from 'react';
import ReactDOM from 'react-dom';

function Input(props) {


    const [active, setActive] = React.useState(false);

    function handleActivation(e) {
        setActive(!!e.target.value);

        props.setType(e.target.value);
      }

    return (
        <>
            <input 
                id={props.name}
                name={props.name}
                onChange={handleActivation}
                className={["grow text-white bg-transparent my-1 py-1 transition-all duration-300 peer", 
                    active ? "border-b-2 border-green-800" : "border-b border-white"
                    ].join(" ")} 
                type={props.type} 
            />
            <label  
                htmlFor={props.name}
                className={["absolute left-1 cursor-text transition-all duration-300", 
                    active ? "-top-4 text-green-800 text-xs" : "top-1 "
                    ].join(" ")}
                >{props.name}
            </label>
        </>
    );   
}


export default Input;