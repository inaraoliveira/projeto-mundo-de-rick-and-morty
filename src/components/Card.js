import React,{ useEffect, useState } from "react";
import Img from "../assets/localizacao.png"
import  "../styles/Card.css";
import Api from "../services/Api";
import Modal from "./Modal";

export const Card=()=> {

    const [personagens, setPersonagens] = useState([]);
    const [modalVisible, setModalVisible] = useState(false)
    
  
  
    useEffect(() => {
      Api.get("/character/?page=1")
         .then((response) => setPersonagens(response.data.results))
         .catch((err) => {
          console.error("erro" + err);
          
        });
    },[])

   return (
   
    <div className="Conteudo">
      {personagens.map((card, key) => {
        
        return (
          <div className="card1" key={key}>
            
            <div className="container-img">
              <img className="Img" src={card.image} alt="" />
            </div>
            <div className="container-paragrafo">
              <p className="Paragrafo">{card.name}</p>
                         <img  className="imgLocation" src={Img} alt="" onClick={()=>setModalVisible(true)}  />
            </div>
          
          </div>
        )
      })}
           {modalVisible ? <Modal event={()=>setModalVisible(false)} local={Img}
            />: null}
    </div>
  );
}