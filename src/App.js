import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import './App.css';
import {ListConstructeur} from './components/ListConstructeur';
import { ListVehicule } from "./components/ListVehicule";

function App() {

  return (
    <Router>
     
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/constructeurs">Constructeurs</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
          <h1>Home </h1>
          </Route>
          <Route path="/constructeurs">
            <ListConstructeur />
          </Route>
          <Route path="/constructeur/:idConstructeur" render={(props) => <ListVehicule idConstructeur={props}/> }>
            
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
