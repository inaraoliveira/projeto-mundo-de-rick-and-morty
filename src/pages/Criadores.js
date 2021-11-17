import React, { useEffect } from "react";
// import { Perfil } from "../components/Perfil";
import '../styles/Criadores.css'

import Emanuel from "../assets/Perfil/isack.png"
import Kaio from "../assets/Perfil/kaio.png"
import Marcelo from "../assets/Perfil/marcelo.png"
import Inara from "../assets/Perfil/nara.png"
import Michele from "../assets/Perfil/michele.png"
import Git from "../assets/Perfil/Git.png"
import Linkedin from "../assets/Perfil/Linkedin.png"
import Thassio from "../assets/Perfil/thassio.png"

export const Criadores =()=> {

    useEffect(()=>{
        document.title = 'Rick & Morty - Criadores'
    }, []);
    
   
  return (
    <section>
      <div className="imagem">
          
        <Card
          imagem={Emanuel}
          title=" ISAAC EMANUEL" 
          imgGit={Git}
          imgLinkedin={Linkedin}
          linkGit="https://github.com/manelxd"
          linkedin="https://www.linkedin.com/in/isaac-emanuel-3167a5219/"
        />

        <Card
          imagem={Marcelo}
          title="JOSÉ MARCELO"
          imgGit={Git}
          imgLinkedin={Linkedin}
          linkGit="https://github.com/MarceloSilva05"
          linkedin="https://www.linkedin.com/in/marcelo-silva05"
        />

        <Card
          imagem={Thassio}
          title="THÁSSIO FERREIRA"
          imgGit={Git}
          imgLinkedin={Linkedin}
          linkGit="https://github.com/Thassio98"
          linkedin="https://www.linkedin.com/in/thassio-ferreira-2947b6162/"
        />

      <Card
          imagem={Inara}
          title="INARA OLIVEIRA"
          imgGit={Git}
          imgLinkedin={Linkedin}
          linkGit="https://github.com/inaraoliveira"
          linkedin="https://www.linkedin.com/in/inara-oliveira/"
        />
          <Card
           imagem={Kaio}
           title="KAIO LUIZ"
           imgGit={Git}
           imgLinkedin={Linkedin}  
           linkGit="https://github.com/kaioluiz03"
           linkedin="https://www.linkedin.com/in/kaioluiz03/" 
           />
        <Card
          imagem={Michele}
          title="MICHELE FRANÇA"
          imgGit={Git}
          imgLinkedin={Linkedin}
          linkGit="https://github.com/miihfranca"
          linkedin="https://www.linkedin.com/in/michele-fran%C3%A7a-45598518a/"
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
        <a href={props.linkGit} target="_blank"><img className="git" src={props.imgGit}alt="git"/></a>
        <a href={props.linkedin} target="_blank"><img className="linkedin" src={props.imgLinkedin}alt=""/></a>
      </div>
    </div>
  );
}