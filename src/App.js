import React from "react";
import "./App.css";
import {BrowserRouter as  Router,Route,Switch} from "react-router-dom";
import Home from "./component/Home";
import Searchpage from "./component/Searchpage";

function App(){
    return <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/search"  exact component={Searchpage}/>
        </Switch>
    </Router>
}

export default App;