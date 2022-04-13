import  React, {useEffect, useState} from 'react';
import '../Style/laniste.css';
import {Link} from "react-router-dom";
import LudisAPI from "../Services/LudisAPI";
import {toast} from "react-toastify";
import jwtDecode from "jwt-decode";
import Field from "../Components/Field";
import {useParams} from "react-router";

const Laniste = () => {
    const [nom, setNom] = useState({
        nom : ""
    });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget }) => {
        const { value, name } = currentTarget;
        setNom({ ...nom, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await LudisAPI.create(nom);
            setError("");
            toast.success("Félicitation vous venez de créer un nouveau Ludi");
        }catch (error){
            setError("Les informations ne sont pas correctes");
            toast.error("Une Erreur est survenue");
        }
    }

    const [ludis, setLudis] = useState([]);

    const fetchLudis = async () => {
        const token = window.localStorage.getItem("authToken");
        try {
            const { id: id } = jwtDecode(token);
            const data = await LudisAPI.findAll(id);
            console.log(data);
            setLudis(data);
        } catch (error) {
            toast.error("Impossible de charger les clients");
        }
    }

    useEffect(() => {
        fetchLudis().then(r=>'r');
    }, []);

    console.log(ludis);
    return <>
        <div className="global-laniste">
            <h1 className={"text-center"}>la maison du laniste</h1>
            <div className="create-ludi">
                <form onSubmit={handleSubmit}>
                    <Field
                        name={"nom"}
                        placeholder={"nom du ludi"}
                        value={nom.nom}
                        onChange={handleChange}
                        error={error.nom}
                    />
                    <button className="btn">
                        Créer
                    </button>
                </form>
            </div>
            <div className={"all-parchemin"}>
                    {ludis.map(item => <div className={"parchemin"} key={item.id}>
                       <h1>{item.nom}</h1>
                        <p>Spécialité : {item.specialite}</p>
                        <Link to={"/ludi/"+item.id}>détail du ludi</Link>
                    </div>)}
            </div>
        </div>
    </>
};

export default Laniste;