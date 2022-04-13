import React, {useContext, useState} from 'react';
import '../Style/register.css';
import Field from "../Components/Field";
import {useNavigate, useParams} from "react-router";
import {toast} from "react-toastify";
import AuthContext from "../Context/AuthContext";
import AuthAPI from "../Services/AuthAPI";

const Register = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email : "",
        password : "",
        nom : "",
        prenom : ""
    });
    const [error, setError] = useState("");

    // Gestion des champs
    const handleChange = ({ currentTarget }) => {
        const { value, name } = currentTarget;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await AuthAPI.register(credentials);
            setError("");
            navigate("/login");
        }catch (error){
            setError("Les informations ne sont pas correctes");
            toast.error("Une Erreur est survenue");
        }
    }

    console.log(credentials);
    return <>
        <div className="global-register">
            <form onSubmit={handleSubmit}>
                <h1 className={"text-center"}>Inscription</h1>
                <Field
                    name={"nom"}
                    placeholder={"Nom"}
                    value={credentials.nom}
                    onChange={handleChange}
                    error={error.nom}
                />
                <Field
                    name={"prenom"}
                    placeholder={"Prénom"}
                    value={credentials.prenom}
                    onChange={handleChange}
                    error={error.prenom}
                />
                <Field
                    name={"email"}
                    placeholder={"Email"}
                    value={credentials.email}
                    onChange={handleChange}
                    error={error.email}
                />
                <Field
                    name={"password"}
                    placeholder={"Mot de passe"}
                    type={"password"}
                    value={credentials.password}
                    onChange={handleChange}
                    error={error.password}
                />
                {/*<Link to={""}>inscription</Link>*/}
                <button className="btn">Inscription</button>
            </form>
        </div>
    </>
};

export default Register;