import React from "react";
import {ComponentContactName} from "../configuration/MenuConfig";
import LigneImage from "../media/ligne_top.png";
import Link from "react-router-dom/Link";
import "./component.css";
import "./content.css"

import Map from "./MapComponent";

export default class ContactComponent extends React.Component {

    componentDidMount() {
        
    }
    
    render() {
        return (
        
            <section className="component contact-component">
    
                <img src={LigneImage} className="ligne-img-top" alt="Une ligne inutile"/>
    
                <div className="content">
                    <div className="content-map">
                        <Map />
                    </div>
                    <div className="content-text text">
                        <h2>{ComponentContactName}</h2>
                        <p>
                            Nous trouver : <br/><br/>
                            420 chemin de chatenet <br/> 
                            26760 Beaumont-lès-Valence <br/><br/>

                            Nous Contacter : <br/><br/>
                            04 75 59 78 72 <br/>
                            bruno-valette@orange.fr <br/><br/>

                            Les horraires du magasin : <br/><br/>
                            - De septembre à juin : <br/><br/>
                            - De juin à aout : <br/><br/>
                            - Fermé en aout 
                        </p>
                        <a href="https://goo.gl/maps/TA47Tv5YB9PWzsDs5" target="_blank"> Voir l'itinéraire</a>
                    </div>
                </div>
                <footer>
                    <Link to="/mentions-legal">Mentios legal</Link>
                </footer>
            </section>
        )
    }
    
}