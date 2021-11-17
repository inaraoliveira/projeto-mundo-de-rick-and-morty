import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/Menu.css';

export const Menu = ()=> {
    const [clicked, setclicked] = useState(false);
    const toggle = ()=> setclicked(!clicked);

    

    return(
        <div className='dropdown'>
            <button onClick={()=>{toggle(!clicked)}} className='responsive-btn'>▽</button>
            { clicked ? 
            <div className='dropdown-menu'>   
                <NavLink activeStyle={{color: 'chartreuse'}} exact to="/">HOME</NavLink>
                <NavLink activeStyle={{color: 'chartreuse'}} to="/personagens">PERSONAGENS</NavLink>
                <NavLink activeStyle={{color: 'chartreuse'}} to="/sobreaserie">SOBRE A SÉRIE</NavLink>
                <NavLink activeStyle={{color: 'chartreuse'}} to="/localizacao">LOCALIZAÇÃO</NavLink>
            </div>
            :''}
        </div>
    );
}