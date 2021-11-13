import React, { useEffect } from "react";
// import { Perfil } from "../components/Perfil";
import '../styles/Criadores.css'

import Emanuel from "../assets/Perfil/isack.png"
import Kaio from "../assets/Perfil/kaio.png"
import Marcelo from "../assets/Perfil/marcelo.png"
import Nara from "../assets/Perfil/nara.png"
import Michele from "../assets/Perfil/michele.png"
import Git from "../assets/Perfil/Git.png"
import Linkedin from "../assets/Perfil/Linkedin.png"
import Gmail from "../assets/Perfil/Gmail.png"
import Thassio from "../assets/Perfil/thassio.jpeg"

export const Criadores =()=> {

    useEffect(()=>{
        document.title = 'Criadores'
    }, []);
    
   
  return (
    <section>
      <div className="imagem">
          
        <Card
          imagem={Emanuel}
          title="EMANUEL" 
          imgGit={Git}
          imgLinkedin={Linkedin}
          imgGmail={Gmail}
        />

        <Card
          imagem={Marcelo}
          title="MARCELO"
          imgGit={Git}
          imgLinkedin={Linkedin}
          imgGmail={Gmail}
        />

        <Card
          imagem={Thassio}
          title="THASSIO"
          imgGit={Git}
          imgLinkedin={Linkedin}
          imgGmail={Gmail}
        />

      <Card
          imagem={Nara}
          title="NARA"
          imgGit={Git}
          imgLinkedin={Linkedin}
          imgGmail={Gmail}
        />
          <Card
                    imagem={Kaio}
                    title="KAIO"
                    imgGit={Git}
                    imgLinkedin={Linkedin}
                    imgGmail={Gmail}
                  />
        <Card
          imagem={Michele}
          title="MICHELE"
          imgGit={Git}
          imgLinkedin={Linkedin}
          imgGmail={Gmail}
        />
      </div>
    </section>
  );
}

function Card(props) {
  return (
    <div className="card_perfil">
      <img src={props.imagem} className="card_imagem"alt=""/>
      <div className="card_body">
        <h2 className="card_title">{props.title}</h2>
      </div>
      <div className="icon" > 
        <a><img className="git" src={props.imgGit}alt=""/></a>
        <a><img className="linkedin" src={props.imgLinkedin}alt=""/></a>
        <a><img className="gmail" src={props.imgGmail} alt=""/></a>
      </div>
    </div>
  );
}