import React, {useContext} from 'react';
import '../Style/navbar.css';
import '../App.css';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import AuthContext from "../Context/AuthContext";
import AuthAPI from "../Services/AuthAPI";
import {toast} from "react-toastify";

const Navbar = () => {
    const history = useNavigate();

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const handleLogout = () => {
        AuthAPI.logout();
        setIsAuthenticated(false);
        toast.info("Vous êtes désormais déconnecté 😁");
    console.log(isAuthenticated);
        history("/");
    };


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
                <Link to="/gladiateurs">Mes gladiateurs</Link>
            </div>
            <div className="section-nav">
                <Link to={"/cirque"}>Le Jeu du Cirque</Link>
            </div>
            <div className="section-nav">
                {/*<Link to={"/register"}>Inscription</Link>*/}
                {/*si il est connect changer le button en disconnect*/}
                {/*<Link to={"/login"}>Connexion</Link>*/}
                    <button className={"btn btn-warning"} onClick={handleLogout}>Deconnexion</button>
            </div>
        </nav>
    </>
};

export default Navbar;