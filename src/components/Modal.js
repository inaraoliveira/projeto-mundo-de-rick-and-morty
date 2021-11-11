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
                  
                    <p><strong>Origem: </strong> {location.name}</p>
                    <p><strong>Localização atual: </strong> {location.dimension}</p>
                    <p><strong>Type: </strong> {location.type}</p>
                   <Link to="/personagens" className="detalhes"> <div className="div-detalhes">Mais Detalhes</div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Location;