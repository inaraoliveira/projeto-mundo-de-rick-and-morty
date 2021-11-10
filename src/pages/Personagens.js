import React, { useEffect, useState } from "react";
import "../styles/Personagens.css";
import Api from "../services/Api";
import ModalPersonagem from "../components/ModalPersonagem";

export const Personagens = () => {
  // document.title = "Rick and Morty";
  const [personagens, setPersonagens] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState("");
  const [info, setInfo] = useState({});
  const [idPersonagem, setId] = useState({});
  const urlInicial = "/character?page=1";
  const urlpersonagem = "/character/";


  useEffect(() => {
    document.title = 'Personagens';
  }, []);

  const consumindoApi = (url) => {
    Api.get(page ? page : url)
      .then(response => {
        setPersonagens(response.data.results);
        setInfo(response.data.info);
      }).catch(err => {
        console.error("erro" + err);
      })
  }

  useEffect(() => {
    consumindoApi(urlInicial, page);
  }, [page])

  const avanca = () => {

    setPage(info.next)
  }

  const voltar = () => {

    setPage(info.prev)
  }

  const Getpersonagem = (id) => {
    Api.get(`${urlpersonagem}${id}`)
      .then(response => {
        const dadosPerso = {
          name: response.data.name,
          status: response.data.status,
          species: response.data.species,
          gender: response.data.gender,
          image: response.data.image,
          origin: response.data.origin.name
        }
        setId(dadosPerso);
      }).catch(err => {
        console.error(err)
      })
  }

  return (
    <>
      <div className="pConteudo">
        {personagens.map((card, key) => {

          return (
            <div className="card" key={key}>
              {/* <h1 className="ptitulo">{card.name}</h1> */}
              <img className="pImg" src={card.image} alt="" />

              <button onClick={() => { setIsOpen(true); Getpersonagem(card.id) }} className="butaoP">{card.name}</button>
            </div>
          )
        })}


        <ModalPersonagem personagem={idPersonagem} open={isOpen} close={() => setIsOpen(false)} />
        <div className="trocaTela">
          <button onClick={voltar} className="prev">Anterior</button>
          <button onClick={avanca} className="next">Próxima</button>
        </div>
      </div>

    </>

  );
}