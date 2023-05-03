import React from "react";
import icon from '../asserts/person-circle.svg';
import logo from '../asserts/Moov_Africa_logo.png';


function Header() {
    return (
        <header className="header">
            <div className="header1">
                <img src={logo} alt="" className="logo"/>
            </div>
            <div className="header2">
                <div className="pro" id="pro" onClick={showMenu}>
                    <img className="profil" src={icon} alt="" />
                </div>
                <div className="none" id="pop" onMouseLeave={closeMenu}>
                    <ul>
                        <li>Modifier profil</li>
                        <li>Se déconnecter</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}


function showMenu() {
    let pop = document.getElementById('pop');   
    pop.className = 'pop';
}

function closeMenu() {
    let pop = document.getElementById('pop');
    pop.className = 'none';
}

export default Header;