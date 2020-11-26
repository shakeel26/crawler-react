import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./screens/Home";
import Error404 from "./screens/Error404";
import Details from "./screens/Details";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={["/"]} component={Home}/>
                <Route exact path={["/degree/:degreeName"]} component={Home}/>
                <Route exact from="*" component={Error404}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;