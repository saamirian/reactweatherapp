import React from "react";
import { connect } from "react-redux";
import { loadWeatherLocation, loadWeatherForecast } from "../actioncreators/getWeather"
import {loadWeatherCondition, loadWeatherCurrent } from "../actioncreators/getWeather"
import ForecastArray from "./ForecastArray"



class Weather extends React.Component {
    render (){
        
        const loc = this.props.loadWeatherLocation;
        const current = this.props.loadWeatherCurrent;
        const condition = this.props.loadWeatherCondition;
        const forecast = this.props.loadWeatherForecast;
        console.log(this.props.loadWeatherForecast[0]);
            return (
       
            <div className="page-container"> 
            <div className="top-section">
            <div><h1>{loc.name}</h1> <h5>{this.props.loadWeatherLocation.region}</h5>
            <h6>{loc.localtime}</h6>
            <h4>{this.props.loadWeatherLocation.country}</h4>
            </div>
            
             <div><p>{condition.text}</p><img src={condition.icon}/>
             
             </div>
             <div><h1>{current.temp_c}</h1> </div>
             </div>
              <div className="bottom-section">
            <ForecastArray forecastdays={forecast} />
          </div>
       
              
            </div>
     );
  
    }
  }
  const mapStateToProps = ({ location , loadWeatherLocation, loadWeatherCurrent, loadWeatherCondition, loadWeatherForecast }) => ({
    location,
    loadWeatherLocation,
    loadWeatherCurrent,
    loadWeatherCondition,
    loadWeatherForecast
    
  });
  
  
    
   
    export default connect(mapStateToProps)(Weather);