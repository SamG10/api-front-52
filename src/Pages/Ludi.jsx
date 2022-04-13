import React, {useEffect, useState} from 'react';
import '../Style/ludi.css';
import Field from "../Components/Field";
import CardGladiateur from "../Components/CardGladiateur";
import {useParams} from "react-router";
import jwtDecode from "jwt-decode";
import GladiateursAPI from "../Services/GladiateursAPI";
import {toast} from "react-toastify";

const Ludi = () => {

    const { id } = useParams();
    console.log(id);

    const [gladiateur, setGladiateur] = useState([]);

    const fetchGladiateur = async () => {
        const token = window.localStorage.getItem("authToken");
        try {
            const {id: user_id} = jwtDecode(token);
            console.log();
            const data = await GladiateursAPI.findAll(user_id, id);
            console.log(data);
            setGladiateur(data);
        } catch (error) {
            toast.error("Impossible de charger les clients");
        }
    }

    useEffect(() => {
        fetchGladiateur().then(r => 'r');
    }, []);

    console.log(gladiateur);

    return <>
        <div className="global-ludi">
            <div className="header-ludi">
                <h1 className="text-center">Ludi </h1>
                <form>
                    <Field
                        name={"nom"}
                        placeholder={"nom du gladiateur"}
                    />
                    <button className={"btn mt-3"}>recruter</button>
                </form>
                {/*si le form est submit et que la requete ok afficher un p avec : félicitation vous venez de recrutez valeur de l'input ou valeur du gladiateur*/}
            </div>
            <div className="content-ludi">
                <div className="components-ludi">
                    {gladiateur.map(item => <CardGladiateur key={item.id} nom={item.nom} adresse={item.adresse} force={item.strength} equilibre={item.equilibre} vitesse={item.vitesse} strategie={item.strategie}/>)}
                </div>
            </div>

        </div>
    </>
};

export default Ludi;