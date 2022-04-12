import React from 'react';
import '../Style/login.css';
import Field from "../Components/Field";
import {Link} from "react-router-dom";

const Login = () => {
    return <>
        <div className={"global-login"}>
            <form>
                <h1 className={"text-center"}>Connexion</h1>
                <Field
                    name={"username"}
                    placeholder={"Email"}
                />
                <Field
                    name={"password"}
                    placeholder={"Mot de passe"}
                />
                <Link to={"/laniste"}>connexion</Link>
            </form>
        </div>
    </>

};

export default Login;