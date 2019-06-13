import React from "react";
import { connect } from "react-redux";

class Forecast5days extends React.Component {
    render (){
        
        const loc = this.props.loadWeatherLocation;
        const current = this.props.loadWeatherCurrent;
        const condition = this.props.loadWeatherCondition;
        console.log(this.props.loadWeatherLocation.localtime);
            return (


                );
  
    }
  }
  const mapStateToProps = ({ location , loadWeatherLocation, loadWeatherCurrent, loadWeatherCondition  }) => ({
    location,
    loadWeatherLocation,
    loadWeatherCurrent,
    loadWeatherCondition
    
  });
  
  
    
   
    export default connect(mapStateToProps)(Forecast5days);