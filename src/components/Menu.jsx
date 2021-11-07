import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Menu.css';

export const Menu = ()=> {
    const menuRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    console.log(isActive)
    return(
        <div className='dropdown'>
            <button onClick={onClick} className='responsive-btn'>▽</button>
            <div ref={menuRef} className='dropdown-menu' >
                <Link to="/">HOME</Link>
                <Link to="/personagens">PERSONAGENS</Link>
                <Link to="/sobreaserie">SOBRE A SÉRIE</Link>
                <Link to="/localizacao">LOCALIZAÇÃO</Link>
            </div>
        </div>
    );
}