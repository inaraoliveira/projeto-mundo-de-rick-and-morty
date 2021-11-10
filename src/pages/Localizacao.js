import React, { useEffect, useState } from "react";
import Api from "../services/Api";
import '../styles/localizacao.css'
import Location from "../components/modal";
import axios from "axios";
 import prev from "../assets/prev.png"
 import next from "../assets/next.png"

const Localizacao = () => {
    // personagem
    const [personagens, setDados] = useState([]); 

    // localizaçoes
    const [locations, setLocations] = useState({});

    // info vem informações sobre a paginação e tamanho do json
    const [info, setInfo] = useState({});

    // modal
    const [display, setdisplay] = useState(false);

    // paginação
    const [page, setpages] = useState('');

    const [idPersonagem, setId] = useState({})

    // url inicial da pagina inicial
    const urlInicial = "/character?page=1";

    const urlpersonagem = "/character/"
    // get da api com a urlbase
    const chamadaApi = (url) => {
        // fiz um ternario se tiver alguma page ele faz o get na url da page, se não ele faz na url inicial
        Api.get(page? page : url)
        .then(response => {
            // populei a variavel o array personagens com tds os dado que vem de results
            setDados(response.data.results);
            // populei o array de info com informações sobre a paginação
            setInfo(response.data.info)
        }).catch(error => {
            console.error(error)
        })
    }

    useEffect(() => {
        // chamada api para a url inicial ou para as urls que retornam em page-next e page-prev
        chamadaApi(urlInicial,page);
        // coloquei page como parametro para ficar observando as mudanças de estado dessa variavel page
    }, [page]);

    function avanca() {
        // popula a variavel page com a url next que vem de info
        setpages(info.next);
    }

    const voltar = () => {
         // popula a variavel page com a url prev que vem de info
        setpages(info.prev)
    }

    const getLocation = (url) => {
        // faz o get em cada url dos personagens
        axios.get(url)
        .then(response => {
            // essa variavel pega os dados que vem da location url e coloca em um objeto
            const dados = {
                type: response.data.type,
                name: response.data.name,
                dimension: response.data.dimension,
            }
            setLocations(dados)
        }).catch(erro => {
            console.error(erro);
        })

    }

    const Getpersonagem = (id) => {
        Api.get(`${urlpersonagem}${id}`)
        .then(response => {
            const dadosPerso = {
                name: response.data.name,
                status: response.data.status,
                species: response.data.species,
                type: response.data.type,
                gender: response.data.gender,
                image: response.data.image,
            }
            setId(dadosPerso);
        }).catch(err => {
            console.error(err)
        })
    }

    // console.log(dados)

    
    return ( 
        <>
        <div className="cards2">
                {
                    personagens.map((item,index) => {
                       return (
                        <div className="card2" key={index} onClick={() => {
                            getLocation(item.location.url)
                            setdisplay(!display)
                            Getpersonagem(item.id)
                        }}>
                            <img className="" src={item.image} alt=""/>
                            <div className="card-body2">
                                <strong>{item.name}</strong>
                            </div>
                        </div>
                       )
                       
                    })
                }
                {
                    // faz um ternario para o modal ficar interativo
                    display &&
                        <Location location={locations} personagem={idPersonagem} event={()=>setdisplay(false)}/>
                }
        </div>
        <div className="pagination2">
        <button onClick={voltar} ><img className="img-button2" src={prev} alt="botão de passar para a esquerda" /></button>
            <button onClick={avanca} ><img className="img-button2" src={next}  alt="botão de passar para a direira"/></button>
        </div>
        </>
    )
}

export default Localizacao;