export default function loadWeatherCurrent(state= {}, action) {
    switch (action.type) {
      case "LOAD_WEATHERCURRENT":
        return action.payload;
      default:
        return state;
    }
  }