import React from "react";
import portalduplo from '../assets/portaldivisor';
import '../styles/HomeConteudo.css';
import { Title } from "./TitlePages";

export const Conteudo = ()=>{

    return(
        <div className='container-flex'>
            <Title titulo='🪐 SEJA BEM VINDO AO MUNDO DO RICK AND MORTY! 🪐' />
            <div className='container-texto'>
                <div className='text-title'>
                    <h2>O que é Rick and Morty?</h2>
                </div>
                <p>
                    Rick and Morty é uma série animada de comédia e ficção científica
                    criada por Justin Roiland e Dan Harmon que mostra as aventuras
                    interdimensionais de Rick, um cientista alcoólatra com a mente
                    mais brilhante da galáxia, e seu neto Morty. Rick, apesar de ótimo
                    cientista, é péssimo quando o assunto é familia e evita qualquer
                    tipo de relação familiar levando seu neto em todas as suas
                    aventuras. Já Morty é um garoto comum, um tanto que covarde, que 
                    se vê sendo arrastado para as confusões de seu avô. As aventuras
                    ocorrem em um número infinito de realidades, com os personagens
                    viajando para outros planetas e dimensões através de portais. Há
                    diferentes versões dos personagens habitando em outras dimensões
                    em todo o multiverso, tendo suas características variadas de uma
                    realidade para outra. E além dos protagonistas, a série traz outros
                    personagens como Summer, irmã de Morty; Beth, filha de Rick e mãe
                    de Morty; e Jerry, o pai de Morty.
                </p>
            </div>
            <img src={portalduplo} alt='imagem divisora'/>        
        </div>
    );
}