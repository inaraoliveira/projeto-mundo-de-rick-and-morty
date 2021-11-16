import React from "react";

export const Episodios = (eps)=>{
    return(
        <div className="container-ep" >
            <h3>{eps.episodio}</h3>
            <p>{eps.resumo}</p>
        </div>
    );
}