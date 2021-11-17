import React from "react";
import "../styles/Recomendados.css";
import { Episodios } from "./Episodios";
import { Title } from "./TitlePages";

export const Recomendados = ()=>{

    return (
        <div className="container-recomendados">
           <Title titulo="Recomendações de Episodios" />
           <div className="divEpisodios" > 
                <Episodios episodio="1. S1 Ep3 - Pickle Rick" resumo='Rick transforma a si mesmo em um pepino enquanto Beth, Summer e Morty vão à terapia familiar.'/>
                <Episodios episodio="2. S1 Ep6 - Rick Potion" resumo='Uma poção projetada para tornar Morty atraente para Jessica se torna viral e infecta toda a Terra.'/>
                <Episodios episodio="3. S1 Ep1 - Pilot" resumo='Rick vai morar com a família de sua filha e se torna uma má influência para seu neto, Morty.'/>
                <Episodios episodio="4. S2 Ep10 - The Wedding Squanchers" resumo='A família Smith é convidada para o casamento do melhor amigo de Rick, Birdperson.'/>
           </div>
        </div>
    );
}