export default function loadWeatherLocation(state= {}, action) {
    switch (action.type) {
      case "LOAD_WEATHERLOCATION":
        return action.payload;
      default:
        return state;
    }
  }