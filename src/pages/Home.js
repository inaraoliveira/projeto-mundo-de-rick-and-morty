import React, { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Conteudo } from "../components/HomeConteudo";


export const Home =()=> {

    useEffect(()=>{
        document.title = 'Rick & Morty - Home'
    }, []);

    return(
        <section className='container-home'>
            <Conteudo />
            <Footer />
        </section>
    );
}