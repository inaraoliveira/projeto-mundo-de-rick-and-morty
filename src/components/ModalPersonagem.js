import React from 'react';
import  ReactDOM  from 'react-dom';
import "../styles/ModalPersonagem.css";
import { Link } from "react-router-dom";


const modalRoot=document.getElementById('modal-root');
export default function ModalPersonagem({personagem,open,close}){
    
    if(!open){
       return null;
    }


    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-conteudo">
              <button type="button" className="modal-butao"onClick={close} >X</button>
              <img className="pImg" src={personagem.image}/>
              <p className="pParagrafo">{personagem.name}</p>
              <p className="pParagrafo">Status: {personagem.status}</p>
              <p className="pParagrafo">Espécie: {personagem.species}</p>
              <p className="pParagrafo">Gênero: {personagem.gender}</p> 
              <p className="pParagrafo">Origem: {personagem.origin}</p> 
              <Link to="/localizacao">LOCALIZAÇÃO</Link>
            </div>
        </div>,
        modalRoot
    );
}