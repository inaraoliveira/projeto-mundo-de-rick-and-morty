import React from "react"
import "../styles/Modal.css"
import { Link } from "react-router-dom";

const Location = ({location, personagem,event}) => {

    console.log(personagem)

    return (
        <>
            <div className="div-modal2" onClick={event}>
                <div className="modal2">
                    <div className="personagem2">
                        <img src={personagem.image} alt=""/>
                        <p>{personagem.name}</p>
                    </div>
                    <div className="infos2">
                    <p><strong>Sexo:</strong>{personagem.gender}</p>
                    <p><strong>Localização: </strong> {location.name}</p>
                    <p><strong>Dimenção: </strong> {location.dimension}</p>
                    <p><strong>Type: </strong> {location.type}</p>
                    <div className="div-detalhes"><Link to="/personagens" className="detalhes">Mais Detalhes</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Location;