import React from "react";
import "./UserDisplay.css";

const Wrapper=(props)=>{

return (
    <div>
    <div className="UserData" style={{backgroundColor:"white"}}>
    {props.children}
    </div>
    </div>
)


}

export default Wrapper;