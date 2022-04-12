import React from 'react';
import '../Style/recrutement.css';
import Field from "../Components/Field";

const Recrutement = () => {
    return <>
        <div className="global-recrutement">
            <h1 className={"text-center"}>Recrutement</h1>
            <div className="description-recrutement">
                <p className={"text-center"}>Recruter des gladiateurs pour enrichir vos ludis</p>
                <p className={"text-center"}>cela vous coutera 5 deniers</p>
            </div>
            <form>
                <Field
                name={"nom"}
                placeholder={"nom du gladiateur"}
                />
                <button className={"btn mt-5"}>recruter</button>
            </form>
        {/*si le form est submit et que la requete ok afficher un p avec : félicitation vous venez de recrutez valeur de l'input ou valeur du gladiateur*/}
        </div>
    </>
};

export default Recrutement;