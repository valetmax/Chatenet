import React from "react";


import ReactPageScroller from "react-page-scroller";
import FirstComponent from "./FirstPageComponent/FirstComponent";
import AboutComponent from "./FirstPageComponent/AboutComponent";
import ProductComponent from "./FirstPageComponent/ProductComponent";
import ContactComponent from "./FirstPageComponent/ContactComponent";

import {ComponentsNames} from "./configuration/MenuConfig";

import "./index.css";
import "./menu.css";


export default class FirstPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
    }


    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    

    getPagesMenuNav = () => {

        const pageMenu = [];

        for (let i = 1; i <= ComponentsNames.length; i++) {
            pageMenu.push(
                <li key={i} onClick={(eventKey) => this.goToPage(i-1)}>{ComponentsNames[i-1]}</li>
            )
        }   

        return [...pageMenu];
    };

    componentDidMount(){
        document.addEventListener("DOMContentLoaded", function(event) {
            const ele = document.getElementById('ipl-progress-indicator')
            if(ele){
                // fade out
                ele.classList.add('available')
                setTimeout(() => {
                // remove from DOM
                ele.outerHTML = ''
                }, 2000)
            }
        });
      }

    render() {

        const pagesMenuNav = this.getPagesMenuNav();

        var menuNav;

        let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
        if(!isMobile) 
            menuNav = <nav className="menu-class">
                <div className="logo-class">

                </div>

                <ul>
                    {pagesMenuNav}
                </ul>
            </nav>;

        return <React.Fragment>
            
            <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                <FirstComponent parentPage={this}/>
                <AboutComponent/>
                <ProductComponent />
                <ContactComponent />
            </ReactPageScroller>
            {menuNav}
        </React.Fragment>
    }
}
