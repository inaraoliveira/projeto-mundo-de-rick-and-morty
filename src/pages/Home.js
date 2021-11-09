import React, { useEffect } from "react";
import { Footer } from "../components/Footer";

export const Home =()=> {

    useEffect(()=>{
        document.title = 'Home'
    }, []);

    return(
        <section className='container-home'>
            <div className='test'></div>
            <Footer />
        </section>
    );
}