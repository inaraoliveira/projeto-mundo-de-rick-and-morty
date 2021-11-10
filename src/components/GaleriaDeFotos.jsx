import React from "react";
import '../styles/GaleriaDeFotos.css'
import Carrossel from "./Carrossel.jsx";


export const GaleriaDeFotos = () => {
    return(
        <div className='cont'>
            <section id='contGaleria'>
                <div className='navGaleria'>
                    <h4 id='navSobre'>SOBRE A SÉRIE</h4>
                    <h4 id='navFotos'>GALERIA DE FOTOS</h4>
                </div>
                <Carrossel />
            </section>
        </div>
    )
}