import React from "react"
import { NavLink } from "react-router-dom"
import Router from './Router'
import SearchForm from "./components/SearchForm"

 
const Navigation = (props) => <nav>
    <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/forecast'>Forecast</NavLink></li>
         
    </ul>
</nav>

export class App extends React.Component {
    render () {
        return <div>
            <div >
            <div>
        <Navigation />
        </div>
            <div id="header">
                <div className="logo">
                    <h1><i>Sa Weather!</i></h1>
                    <h6>The most accurate weather forecast</h6>
            </div>
                
                <SearchForm />
            </div>
        
        </div>
        <div>
            <Router />
            </div>  
        </div>
    }    
}

export default App;