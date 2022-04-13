import React, {useEffect, useState} from 'react';
import '../Style/cardGladiateur.css';
import jwtDecode from "jwt-decode";
import {toast} from "react-toastify";
import GladiateursAPI from "../Services/GladiateursAPI";
import axios from "axios";
import {useParams} from "react-router";

const CardGladiateur = ({nom, adresse, equilibre, force, vitesse, strategie}) => {

    return <>
            <div className="card-gladiateur">
                <h1 className={"text-center"}>{nom}</h1>
                <div className="capacite">
                    <div className={"content-capacite"}>
                        <label htmlFor="adresse">Adresse :</label>
                        <div>{adresse}</div>
                    </div>
                    <div className={"content-capacite"}>
                        <label htmlFor="adresse">Force :</label>
                        <div>{force}</div>
                    </div>
                    <div className={"content-capacite"}>
                        <label htmlFor="adresse">Equilibre :</label>
                        <div>{equilibre}</div>
                    </div>
                    <div className={"content-capacite"}>
                        <label htmlFor="adresse">Vitesse :</label>
                        <div>{vitesse}</div>
                    </div>
                    <div className={"content-capacite"}>
                        <label htmlFor="adresse">Strategie :</label>
                        <div>{strategie}</div>
                    </div>
                </div>
                <div className="entrainement">
                    <label htmlFor="entrainement">entrainement :</label>
                    <button className="btn m-2">PHYSIQUE</button>
                    <button className="btn m-2">TACTIQUE</button>
                    <button className="btn m-2">COMBINE</button>
                </div>
            </div>
    </>
};

export default CardGladiateur;