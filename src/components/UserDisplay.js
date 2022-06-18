import React from "react";
import "./UI/UserDisplay.css"



const UserDisplay=(props)=>{
    return (
    <ul>
        <li key={props.name}>{props.name} age  {props.age} years </li>
    </ul>

    )
}

export default UserDisplay;