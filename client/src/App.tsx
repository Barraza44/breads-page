import React from 'react';
import Index from "./pages";
import Shop from "./pages/shop";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/shop" >
          <Shop />
        </Route>
        <Route exact path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
