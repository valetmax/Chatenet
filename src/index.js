import React from "react";
import { render, hydrate } from 'react-dom';
import config from './configuration/FirebaseConfig';
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import "./index.css";
import FirstPage from "./page/FirstPage";
import MentionsLegal from "./page/MentionsLegal";
import Login from "./backoffice/Login";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(<Router basename="/">
        <div>
            <Switch>
                <Route exact path="/" name="Les vergers de chatenet" component={FirstPage}/>
                <Route path="/mentions-legal" name="verger de chatenet" component={MentionsLegal}/>
                <Route path="/backoffice" name="verger de chatenet" component={Login}/>
            </Switch>
        </div>
    </Router>,
    rootElement
);
} else {
    render(
        <Router basename="/">
            <div>
                <Switch>
                    <Route exact path="/" name="Les vergers de chatenet" component={FirstPage}/>
                    <Route path="/mentions-legal" name="verger de chatenet" component={MentionsLegal}/>
                    <Route path="/backoffice" name="verger de chatenet" component={Login}/>
                </Switch>
            </div>
        </Router>,
        rootElement
    );
}
