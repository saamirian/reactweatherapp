import React from "react"
import { connect } from "react-redux";
import insertLocation from "../actioncreators/InsertLocation";
import getWeather from "../actioncreators/getWeather"
import { Link } from  'react-router-dom';


class SearchForm extends React.Component {
  

        
    render () {
        return <div>
        
          
       <form onSubmit={this.props.handleSubmit} id="search-form">
           
           <div><label className="inline-labels" htmlFor="location">PLease insert the location:</label></div>
           <div>
           <input className="input-areas" name="location" placeholder= "Location" type="text" 
           onChange={this.props.handleChange} value={this.props.location} /></div>
           <div>
           <Link to={`/`}><button id="submit" type="submit" onClick={this.props.handleClick}>Search</button></Link>
           </div>
           
       </form>
        </div>
    }
}

const mapStateToProps = ({ location }) => ({
    location
    
    
  });
const mapDispatchToProps = dispatch => ({
      
    handleChange(event) {
      dispatch(insertLocation(event.target.value));
      console.log(event.target.value);
      
    },
  
    handleClick() {
      dispatch(getWeather());
      dispatch
      
        
        }
    
  });
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
