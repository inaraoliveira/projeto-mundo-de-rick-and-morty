import React from "react"
import "../styles/Modal.css"
import { Link } from "react-router-dom";

const Modal = ({location, personagem, event1,}) => {

    console.log(personagem)

    return (
        
            <div className="div-modal2" onClick={event1}>
                <div className="modal2">
                    <div className="box-img">
                        <img src={personagem.image} alt=""/>
                    </div>
                    <div className="box-info2">
                  
                        <div className="info2">
                            <p className="text-info">
                                <strong>Origem: </strong> {location.name}
                            </p>
                            <p className="text-info">
                                <strong>Localização atual: </strong> {location.dimension}
                            </p>
                            <p className="text-info">
                                <strong>Tipo: </strong> {location.type}
                            </p>
                        </div>
                      <div className="box-detalhes2">
                          <Link to="/personagens" className="detalhes2">
                            <p>Mais Detalhes</p>
                          </Link>
                      </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Modal;