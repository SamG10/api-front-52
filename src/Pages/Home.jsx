import React from 'react';
import '../Style/home.css';
import {Link} from "react-router-dom";

const Home = () => {
    return <>
        <div className="global-home">
            <div className={"form-button-home"}>
                <Link to="/register">Inscription</Link>
                <Link to="/login">Connexion</Link>
            </div>
        </div>
    </>
};

export default Home;