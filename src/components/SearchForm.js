import React from "react"
import { connect } from "react-redux";
import insertLocation from "../actioncreators/InsertLocation";
import getWeather from "../actioncreators/getWeather"
import { Link } from  'react-router-dom';


class SearchForm extends React.Component {
  

        
    render () {
        return <div>
        <div>
          
       <form onSubmit={this.props.handleSubmit}>
           
           <label htmlFor="location">PLease insert the location:</label>
           <input name="location" placeholder= "Location" type="text" 
           onChange={this.props.handleChange} value={this.props.location} />
           <Link to={`/`}><button type="submit" onClick={this.props.handleClick}>Search</button></Link>
           
       </form>
       </div>
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
