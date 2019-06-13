import React from "react"
import { Switch, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Forecast from "./pages/Forecast"



const Router = () => (
    <Switch>
        <Route exact path='/' component ={Homepage} />
        <Route exact path='/forecast' component ={Forecast} />
    </Switch>
)
  
export default Router;