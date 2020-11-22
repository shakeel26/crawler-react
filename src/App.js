import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./screens/Home";
import Error404 from "./screens/Error404";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={["/", "/degree/:degreeName"]} component={Home}/>
                <Route exact from="*" component={Error404} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;