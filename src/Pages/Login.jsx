import React, {useContext, useState} from 'react';
import '../Style/login.css';
import Field from "../Components/Field";
import AuthContext from "../Context/AuthContext";
import AuthAPI from "../Services/AuthAPI";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";

const Login = () => {
    const navigate = useNavigate();

    const { setIsAuthenticated } = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
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
            await AuthAPI.authenticate(credentials);
            setError("");
            setIsAuthenticated(true);
            navigate("/laniste");
        }catch (error){
            setError("Les informations ne sont pas correctes");
            toast.error("Une Erreur est survenue");
        }
    }
    return <>
        <div className={"global-login"}>
            <form onSubmit={handleSubmit}>
                <h1 className={"text-center"}>Connexion</h1>
                <Field
                    name={"username"}
                    placeholder={"Email"}
                    value={credentials.username}
                    onChange={handleChange}
                    error={error}
                />
                <Field
                    name={"password"}
                    placeholder={"Mot de passe"}
                    value={credentials.password}
                    onChange={handleChange}
                    type="password"
                    error=""
                />
                <button type="submit" className="btn">connexion</button>
            </form>
        </div>
    </>

};

export default Login;