import React from 'react';
import {Route, Switch} from "react-router-dom";

import './Main.css';
import Home from "../Home/Home";
import SignOut from "../SignOut/SignOut";
import SignIn from "../SignIn/SignIn";

const Main = (props) => {
    return (
        <main className="Main">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path="/signin" components={SignIn}/>
                <Route path="/signout" components={SignOut}/>
            </Switch>
        </main>
    );
};

export default Main;
