export default function loadWeatherForcast(state= {}, action) {
    switch (action.type) {
      case "LOAD_WEATHERFORCAST":
        return action.payload;
      default:
        return state;
    }
  }