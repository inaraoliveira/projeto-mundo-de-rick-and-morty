import React, { useEffect } from "react";
import { Perfil } from "../components/Perfil";
import '../styles/Criadores.css'

export const Criadores =()=> {

    useEffect(()=>{
        document.title = 'Criadores'
    }, []);
    
    return(
        <div>
            <section className='container-perfis'>
                <Perfil imagePerfil={()=>{}} imageDis='' criador='Michele' />
                <Perfil imagePerfil={()=>{}} imageDis='' criador='Isaac' />
                <Perfil imagePerfil={()=>{}} imageDis='' criador='Inara' />
                <Perfil imagePerfil={()=>{}} imageDis='' criador='Thassio' />
                <Perfil imagePerfil={()=>{}} imageDis='' criador='Marcelo' />
                <Perfil imagePerfil={()=>{}} imageDis='' criador='Kaio' />
            </section>
        </div>

    );
}