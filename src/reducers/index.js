import { combineReducers } from "redux";
import location from "./location";
import loadWeatherLocation from "./loadWeatherLocation";
import loadWeatherCurrent from "./loadWeatherCurrent";
import loadWeatherCondition from "./loadWeatherCondition"




export default combineReducers({
  location,
  loadWeatherLocation,
  loadWeatherCurrent,
  loadWeatherCondition
  
});