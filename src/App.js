import React from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import Products from "./components/products/allproducts/products/Products";
import AddnewProduct from "./components/products/productactions/addnewproduct/AddnewProduct";
import SignUp from "./components/user/signupuser/Signup";
import Login from "./components/user/loginuser/Login";
import UpdateProduct from "./components/products/productactions/updateproduct/UpdateProduct";
import LandingPage from "./components/landingpage/LandingPage";
import ChartComponent from "./components/charts/allproductschart/ChartComponent";
import Pdpcomponent from "./components/products/allproducts/pdp/Pdpcomponent";
import CategoryChart from "./components/charts/categorywisechart/CategoryChart";

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
        <Route path="/chart" component={ChartComponent}></Route>
        <Route path="/pdp" component={Pdpcomponent}></Route>
        <Route path="/CategoryChart" component={CategoryChart}></Route>
      </Switch>
    </div>
  );
}

export default App;
