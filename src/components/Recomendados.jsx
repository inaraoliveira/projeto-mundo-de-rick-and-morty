import React from "react";
import "../styles/Recomendados.css";
import { Episodios } from "./Episodios";
import { Title } from "./TitlePages";

export const Recomendados = ()=>{

    return (
        <div className="container-recomendados">
           <Title titulo="Recomendações de Episodios" />
           <div className="divEpisodios" > 
                <Episodios texto="1. S1 Ep3 - Pickle Rick"  />
                <Episodios texto="2. S1 Ep6 - Rick Potion"  />
                <Episodios texto="3. S1 Ep3 - Pickle Rick" />
                <Episodios texto="4. S1 Ep3 - Pickle Rick"  />
           </div>
        </div>
    );
}