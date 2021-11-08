import React from "react";
import "../styles/modal.css"


const Modal = (props)=>{   
    return(
        <div className="modal">
             <div className="conteudo" >
                <button className="closed" onClick={props.event} >x</button>
               
                </div>
            <div className="container" >
               
                <div>
                </div>
            </div>
        </div>
    )
        
}

export default Modal;