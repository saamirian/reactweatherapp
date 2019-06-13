import React from "react"
import { NavLink } from "react-router-dom"
import Router from './Router'

 
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
            <Router />
        
        </div>
    }    
}

export default App;