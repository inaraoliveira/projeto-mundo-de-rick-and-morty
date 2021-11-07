import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Menu.css';

export const Menu = ()=> {
    const [clicked, setclicked] = useState(false);
    const toggle = ()=> setclicked(!clicked);

    

    return(
        <div className='dropdown'>
            <button onClick={()=>{toggle(!clicked)}} className='responsive-btn'>▽</button>
            { clicked ? 
            <div className='dropdown-menu'>   
                <Link to="/">HOME</Link>
                <Link to="/personagens">PERSONAGENS</Link>
                <Link to="/sobreaserie">SOBRE A SÉRIE</Link>
                <Link to="/localizacao">LOCALIZAÇÃO</Link>
            </div>
            :''}
        </div>
    );
}