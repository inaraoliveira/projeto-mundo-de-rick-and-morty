import React from "react"
import "../styles/modal.css"

const Location = ({location, personagem,event}) => {

    console.log(personagem)

    return (
        <>
            <div class="div-modal" onClick={event}>
                <div className="modal">
                    <div className="personagem">
                        <img src={personagem.image} alt=""/>
                        <p>{personagem.name}</p>
                    </div>
                    <div className="infos">
                    <p><strong></strong>{personagem.gender}</p>
                    <p><strong>Name: </strong> {location.name}</p>
                    <p><strong>Dimension: </strong> {location.dimension}</p>
                    <p><strong>Type: </strong> {location.type}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Location;