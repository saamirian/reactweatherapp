import React from "react";
import { connect } from "react-redux";
import { loadWeatherLocation } from "../actioncreators/getWeather"
import {loadWeatherCondition, loadWeatherCurrent } from "../actioncreators/getWeather"



class Weather extends React.Component {
    render (){
        
        const loc = this.props.loadWeatherLocation;
        const current = this.props.loadWeatherCurrent;
        const condition = this.props.loadWeatherCondition;
        console.log(this.props.loadWeatherLocation.localtime);
            return (
       
            <div>
            <div><h1>{this.props.loadWeatherLocation.name}</h1> <h5>{this.props.loadWeatherLocation.region}</h5>
            <h6>{loc.localtime}</h6>
            <h4>{this.props.loadWeatherLocation.country}</h4>
            </div>
            
             <div><p>{condition.text}</p><img src={condition.icon}/>
             
             </div>
             <div><h1>{current.temp_c}</h1> </div>
              <div></div>
            </div>
     );
  
    }
  }
  const mapStateToProps = ({ location , loadWeatherLocation, loadWeatherCurrent, loadWeatherCondition  }) => ({
    location,
    loadWeatherLocation,
    loadWeatherCurrent,
    loadWeatherCondition
    
  });
  
  
    
   
    export default connect(mapStateToProps)(Weather);