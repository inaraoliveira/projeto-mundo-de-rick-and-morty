import React,{ useEffect, useState } from "react";
import "./Personagens.css";
import api from "../services/Api";

export const Personagens=()=> {
    const [personagens, setPersonagens] = useState([]);
    // document.title="Rick and Morty";
  
  
    useEffect(() => {
      api.get("/character/?page=20")
        .then((response) => setPersonagens(response.data.results))
        .catch((err) => {
          console.error("erro" + err);
          
        });
    },[])

   return (
   
    <div className="pConteudo">
      {personagens.map((card, key) => {
        
        return (
          <div className="card" key={key}>
            
            <div>
              <h1 className="ptitulo">{card.name}</h1>
              <img className="pImg" src={card.image} />
            </div>
            <p className="pParagrafo">Espécie: {card.species}</p>
            <p className="pParagrafo">Status: {card.status}</p>
            <p className="pParagrafo">Gênero: {card.gender}</p>  
           <p className="pParagrafo">Localizaçâo: {card.location.name}</p> 
          </div>
        )
      })}
          
              {/* <Modal>
          <h1>oi</h1>
        </Modal>  */}
    </div>
  );
}