import React from "react";

import "./App.css";
import SignUp from "./components/Signup";

import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import AddnewProduct from "./components/AddnewProduct";

import Login from "./components/Login";
import UpdateProduct from './components/UpdateProduct'
import LandingPage from "./components/LandingPage";
import ChartComponent from "./components/ChartComponent";
import Pdpcomponent from "./components/Pdpcomponent";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/addnewproduct" component={AddnewProduct}></Route>
        
        <Route path="/update" component={UpdateProduct}></Route>
        <Route  path="/chart" component={ChartComponent}></Route>
        <Route path="/pdp" component={Pdpcomponent}></Route>
        
        
      </Switch>
    </div>
  );
}

export default App;
