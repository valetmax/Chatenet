import React from "react";
import {ComponentAboutName} from "../../configuration/MenuConfig";
import LigneImage from "../../media/ligne_bottom.png";
import "./component.css";
import "./content.css";

export default class AboutComponent extends React.Component {

    render () {
        return (
            <section className="component about-component">
                <div className="content">
                    <div className="content-photos">Photos</div>
                    <div className="content-text text">
                        <h2>{ComponentAboutName}</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aenean rutrum orci quam, ut lobortis neque ullamcorper scelerisque. 
                            Ut maximus rutrum tortor sed interdum. <br /> <br />
                            Pellentesque facilisis nibh vel nisi consequat, non volutpat massa hendrerit. 
                            Nam tristique, risus ac feugiat interdum, ex sapien malesuada tellus, a malesuada dui dolor in purus. 
                            Proin iaculis risus enim, at ullamcorper quam posuere vel. 
                            Sed vel gravida neque, ac tincidunt tellus. <br /> <br />
                            Morbi lacinia nibh risus, non ultricies arcu bibendum nec. 
                            Integer et lacus tincidunt, lobortis mi a, vestibulum elit. 
                            Nunc sagittis neque libero, sed consequat erat imperdiet vitae.
                        </p>
                    </div>
                </div>
                <img src={LigneImage} className="ligne-img-bottom" alt="Une ligne inutile" />
            </section>
        )
    }
}