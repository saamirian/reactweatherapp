export default function loadWeatherForecast(state= [], action) {
    switch (action.type) {
      case "LOAD_WEATHERFORECAST":
        return action.payload;
      default:
        return state;
    }
  }