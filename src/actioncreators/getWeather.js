import axios from "axios";
const WEATHER_KEY = "e3fc4da5f1d44435816110411193105";
const days = 10;

export default function getWeather() {
    return function(dispatch, getState) {
      const { location } = getState();
      
      const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}  &q=${location} &days=${days}`;
      return axios.get(URL)
      .then(response => {
        
        //if ( response && response.data.length > 0) {
         console.log("salam");
        console.log(response.data.forecast.forecastday[2]);
        dispatch(loadWeatherLocation(response.data.location));
        dispatch(loadWeatherCurrent(response.data.current));
        dispatch(loadWeatherCondition(response.data.current.condition));
        //else { dispatch(loadWeather([]));
        //console.log("khodafez"); }
        
      });
    };
  }

  export function loadWeatherLocation(response) {
    return{
        type:"LOAD_WEATHERLOCATION",
        payload: response };
      }

export function loadWeatherCurrent(response) {
    return{
        type:"LOAD_WEATHERCURRENT",
        payload: response };
      }

export function loadWeatherCondition(response) {
    return{
        type:"LOAD_WEATHERCONDITION",
        payload: response };
      }