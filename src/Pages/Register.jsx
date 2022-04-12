import React from 'react';
import '../Style/register.css';
import Field from "../Components/Field";
import {Link} from "react-router-dom";

const Register = () => {
    return <>
        <div className="global-register">
            <form>
                <h1 className={"text-center"}>Inscription</h1>
                <Field
                    name={"nom"}
                    placeholder={"Nom"}
                />
                <Field
                    name={"prenom"}
                    placeholder={"Prénom"}
                />
                <Field
                    name={"username"}
                    placeholder={"Email"}
                />
                <Field
                    name={"password"}
                    placeholder={"Mot de passe"}
                />
                <Link to={"/login"}>inscription</Link>
            </form>
        </div>
    </>
};

export default Register;