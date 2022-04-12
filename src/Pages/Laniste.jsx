import React from 'react';
import '../Style/laniste.css';
import {Link} from "react-router-dom";

const Laniste = () => {
    return <>
        <div className="global-laniste">
            <h1 className={"text-center"}>la maison du laniste</h1>
            <div className={"all-parchemin"}>
                <div className="parchemin">
                    <div className="content-parchemin">
                        <h3>Nom du Ludi</h3>
                        <p>Spécialité : char</p>
                        <Link to={"#"}>détail du ludi</Link>
                    </div>
                </div>
                <div className="parchemin">
                    <div className="content-parchemin">
                        <h3>Nom du Ludi</h3>
                        <p>Spécialité : char</p>
                        <Link to={"#"}>détail du ludi</Link>
                    </div>
                </div>
                <div className="parchemin">
                    <div className="content-parchemin">
                        <h3>Nom du Ludi</h3>
                        <p>Spécialité : char</p>
                        <Link to={"#"}>détail du ludi</Link>
                    </div>
                </div>
                <div className="parchemin">
                    <div className="content-parchemin">
                        <h3>Nom du Ludi</h3>
                        <p>Spécialité : char</p>
                        <Link to={"#"}>détail du ludi</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Laniste;