import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import "./index.css";
import FirstPage from "./FirstPage";
import MentionsLegal from "./MentionsLegal";
import Login from "./Backoffice/Login";

ReactDOM.render(
    <Router basename="/">
        <div>
            <Switch>
                <Route exact path="/" name="Les vergers de chatenet" component={FirstPage}/>
                <Route path="/mentions-legal" name="verger de chatenet" component={MentionsLegal}/>
                <Route path="/backoffice" name="verger de chatenet" component={Login}/>
            </Switch>
        </div>
    </Router>,
    document.getElementById("root")
);