import React from 'react';
import '../styles/SobreSerie.css';
import Carrossel from "./Carrossel.jsx";

export const SobreSerie = () => {
    return(
        <div id='container'>
            <section className='contConteudo'>
                <div id='carrossel'>
                    <Carrossel />
                </div>
                <div id='conteudo'>
                    <h1 className='titleSerie'>CURIOSIDADES</h1>
                    <article className='curiosidades'>
                        <h4><span>1-</span> A série foi uma das primeiras a estrear um episódio no Instagram</h4>
                        <p>
                        O oitavo episódio da Primeira temporada foi publicado na rede social antes mesmo de ir ao ar, mas devido a limitação de tempo
                        de vídeos no Instagram serem de apenas 15 segundos, o episódio foi cortado em 109 pedaços. Ainda é possível encontrá-lo na
                        conta @RickandMorty.
                        </p>
                    </article>
                    <article className='curiosidades'>
                        <h4><span>2-</span> Justin Roilando fica bêbado para interpretar Rick</h4>
                        <p>
                        A voz por trás de Rick é pelo menos parcialmente autêntica em sua tendência a beber e em seus arrotos esporádicos. Esses
                        arrotos costumam ser o resultado de Justin Roiland bebendo cerveja durante as sessões de gravação. Isso não apenas induz
                        esses arrotos cômicos, mas também permite que ele interprete um personagem mais maluco, livre e solto, que é propenso a
                        divagações divertidas.
                        </p>
                    </article>
                    <article className='curiosidades'>
                        <h4><span>3-</span> A inspiração para Mr. Meeseeks veio de um gato</h4>
                        <p>
                        Em um vídeo, os criadores comentaram a origem de Mr. Meeseeks, o personagem múltiplo que realiza desejos e depois morre,
                        mostrado no episódio Meeseeks And Destroy. A inspiração veio de um amigo de Roiland, que tinha um gato chamado Skeeseks.
                        Anos depois, quando Roiland estava numa reunião de roteiristas de Rick and Morty ouvindo ideias, do nada ele começou a
                        gritar "Eu sou o Mr. Meeseeks!". A equipe acabou incluindo o personagem na história.
                        </p>
                    </article>
                    <article className='curiosidades'>
                        <h4><span>4-</span> Picle Rick é uma homenagem a um episódio de Breaking Bad</h4>
                        <p>
                        Se você viu o terceiro episódio da terceira temporada, Pickle Rick, pôde conferir uma das aventuras mais malucas da série:
                        Rick transforma a si mesmo num pepino para não ter que ir a uma sessão de terapia familiar. Ele acaba caindo no esgoto e 
                        precisando se virar para sair de lá vivo, mesmo sem ter mãos e pés. O episódio foi parcialmente inspirado no episódio 4 Days
                        Out, de Breaking Bad, em que o trailer de Jesse quebra no meio do deserto, deixando ele e Walter presos lá.
                        </p>
                    </article>
                    <article className='curiosidades'>
                        <h4><span>5-</span> O episódio inspirado em Uma Noite de Crime foi feito de improviso e ninguém tinha visto o filme</h4>
                        <p>
                        Segundo o livro de arte recém-lançado sobre o seriado, o penúltimo episódio da segunda temporada, Look Who’s Purging Now,
                        foi criado totalmente de última hora. Isso porque a equipe pretendia fazer o episódio final em duas partes e só no final 
                        da produção é que decidiu transformar a segunda parte no primeiro episódio da terceira temporada. Com isso, ficaram com 
                        um buraco na grade para preencher. Dan Harmon escreveu o roteiro inteiro em um dia. Deu tão certo que Roiland descreve 
                        esse episódio como seu favorito da segunda temporada. O mais engraçado é que, apesar de o episódio se basear em Uma Noite
                        de Crime, ninguém da equipe havia visto o filme na época.
                        </p>
                    </article>
                </div>
            </section>
        </div>
    );
}