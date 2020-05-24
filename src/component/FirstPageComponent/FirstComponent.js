import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./firstComponent.css";

import CarouselImg1 from '../../media/CarouselleAcceuil/image-accueuil-1bis.jpg';
import CarouselImg2 from '../../media/CarouselleAcceuil/image-accueuil-2.jpg';
import CarouselImg3 from '../../media/CarouselleAcceuil/image-accueuil-3.jpg';
import CarouselImg4 from '../../media/CarouselleAcceuil/image-accueuil-4.jpg';
import CarouselImg1Mobile from '../../media/p4.png';
import ArrowDown from '../../media/arrowDown-512x512.png';

export default class FistComponent extends React.Component {
    constructor(props) {
        super(props);
        this.parentPage = this.props.parentPage;
    }

    getImage1() {
        let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
        if(!isMobile) 
            return CarouselImg1;
        else 
            return CarouselImg1Mobile;
    }

    render (){
        return <section className="component first-component">

                <Carousel autoPlay={true} transitionTime={3000} interval={5000} showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true}>
                    <div>
                        <img
                            className="d-block w-100 h-100"
                            src={CarouselImg1}
                            alt="First slide"
                        />
                    </div>
                    <div>

                        <img
                            className="d-block w-100 h-100"
                            src={CarouselImg2}
                            alt="First slide"   
                        />
                    </div>
                    <div>

                        <img
                            className="d-block w-100 h-100"
                            src={CarouselImg3}
                            alt="First slide"   
                        />
                    </div>
                    <div>

                        <img
                            className="d-block w-100 h-100"
                            src={CarouselImg4}
                            alt="First slide"   
                        />
                    </div>
                </Carousel>
                <h1 className="website-title">
                    <span>LES VERGERS</span>
                    <span> DE </span>
                    <span>CHATENET</span>
                </h1>
                <div className="website-access-button">
                    <div onClick={(eventKey) => this.parentPage.goToPage(1)}>
                        <img src={ArrowDown} alt="fleche vers le bas" />
                    </div>
                </div>
            
            </section>  ;  

    }
}
