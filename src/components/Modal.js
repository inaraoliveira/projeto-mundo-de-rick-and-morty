import React from "react"
import "../styles/Modal.css"
import { Link } from "react-router-dom";

const Modal = ({location, personagem, event1,}) => {

    console.log(personagem)

    return (
        
            <div className="div-modal2" onClick={event1}>
                <div className="modal2">
                    <div className="personagem2">
                        <img src={personagem.image} alt=""/>
                        <p>{personagem.name}</p>
                    </div>
                    <div className="infos2">
                  
                        <p>
                            <strong>Origem: </strong> {location.name}
                        </p>
                        <p>
                            <strong>Localização atual: </strong> {location.dimension}
                        </p>
                        <p>
                            <strong>Type: </strong> {location.type}
                        </p>
                      <Link to="/personagens" className="detalhes2"> 
                        Mais Detalhes
                      </Link>
                    </div>
                </div>
            </div>
        
    )
}

export default Modal;