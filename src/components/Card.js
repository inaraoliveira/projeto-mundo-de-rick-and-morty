import React,{ useEffect, useState } from "react";
// import "./Personagens.css";
import Api from "../services/Api";

export const Card=()=> {
    const [personagens, setPersonagens] = useState([]);
    // document.title="Rick and Morty";
  
  
    useEffect(() => {
      Api.get("/character/?page=1")
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
              <img className="pImg" src={card.image} alt="" />
            </div>
            <p className="pParagrafo">{card.name}</p>
           <p className="pParagrafo">Localizaçâo: {card.location.name}</p> 
          </div>
        )
      })}
          
    </div>
  );
}