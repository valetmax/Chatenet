import React from "react";
import {ComponentProductName} from "../configuration/MenuConfig";

import CeriseImg from "../media/Lame3/cerise.jpg";
import AbricotImg from "../media/Lame3/abricot.jpg";
import PommeImg from "../media/Lame3/pomme.jpg";
import MagasinImg from "../media/Lame3/magasin.jpg";

import "./content.css";

export default () => {
    return (
        <section className="component product-component">
            <div className="content-head text">
                {/* <h2>{ComponentProductName}</h2> */}
                <h2>fruits et légumes</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean rutrum orci quam, ut lobortis neque ullamcorper scelerisque. 
                    Ut maximus rutrum tortor sed interdum. <br /> <br />
                    Pellentesque facilisis nibh vel nisi consequat, non volutpat massa hendrerit. 
                    Nam tristique, risus ac feugiat interdum, ex sapien malesuada tellus, a malesuada dui dolor in purus. 
                    Proin iaculis risus enim, at ullamcorper quam posuere vel. 
                    Sed vel gravida neque, ac tincidunt tellus.
                </p>
            </div>
           
            <div className="content">
                <div className="content-3">
                    <img src={PommeImg} className="content-img" />
                    <span className="content-img-title"><h3>Pommes</h3></span>
                </div>
                <div className="content-3">
                    <img src={CeriseImg} className="content-img" />
                    <span className="content-img-title"><h3>Cerises</h3></span>
                </div>
                <div className="content-3">
                    <img src={AbricotImg} className="content-img" />
                    <span className="content-img-title"><h3>Abricots</h3></span>
                </div>
                <div className="content-3">
                    <img src={MagasinImg} className="content-img" />
                    <span className="content-img-title"><h3>Notre magasin</h3></span>
                </div>
            </div>
        </section>
    )
}