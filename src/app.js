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
            <div>
                Hello

            </div>
        
        
            <Navigation />
            <SearchForm />
            <Router />
            
        </div>
    }    
}

export default App;