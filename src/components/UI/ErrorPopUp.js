import React from "react";
import "./../User.css"
import "./ErrosPopUp.css"


const ErrorPopUp =(props) =>{



    return (
        <div className="form-control" >
            <div className="backdrop" onClick={props.onClick} />
        <div className="modal">
            <header className="header" style={{backgroundColor:'white'}}>
                <h1 style={{backgroundColor:'white',color:'black'}}>{props.title}</h1>
               <hr ></hr>
            </header>
            
            <div className="content" style={{backgroundColor:'white'}}>
                <p style={{backgroundColor:'white',fontSize:"large"}}>{props.content} </p>
            </div>
            <footer className="actions" style={{backgroundColor:'white'}}>
                   <button onClick={props.onClick}> close</button>
            </footer>
        </div>
        </div>
    )
}

export default ErrorPopUp;