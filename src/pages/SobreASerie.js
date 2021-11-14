import { SobreSerie } from "../components/SobreSerie";
import React, { useEffect } from "react";

export const SobreASerie =()=> {

    useEffect(()=>{
        document.title = 'Sobre a Série'
    }, []);
    
    return(
        <>
        <SobreSerie />
        </>
    );
}