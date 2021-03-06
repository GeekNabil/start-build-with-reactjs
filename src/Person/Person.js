import React from "react";
import "./Person.css";

const person = (props) => {
    return (
        <div className="Person">
            <p>I am a {props.name} and I am {props.age} years old.</p>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.click} value={props.name}/>
        </div>
    );

}

export default person;