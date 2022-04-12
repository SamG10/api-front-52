import React from 'react';
import '../Style/navbar.css';
import '../App.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return <>
        <nav>
            <div className="section-nav">
                <h1>SPARTANS</h1>
            </div>
            <div className="section-nav">
                <p>Bonjour : SAMUEL</p>
                <p>TU as : 250 deniers</p>
            </div>
            <div className="section-nav">
                <Link to={"/laniste"}>La Maison du Laniste</Link>
            </div>
            <div className="section-nav">
                <Link to="/recrutement">Recrutement</Link>
            </div>
            <div className="section-nav">
                <Link to={"/cirque"}>Le Jeu du Cirque</Link>
            </div>
            <div className="section-nav">
                <Link to={"/register"}>Inscription</Link>
                {/*si il est connect changer le button en disconnect*/}
                <Link to={"/login"}>Connexion</Link>
            </div>
        </nav>
    </>
};

export default Navbar;