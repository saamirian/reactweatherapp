export default function loadWeatherCondition(state= {}, action) {
    switch (action.type) {
      case "LOAD_WEATHERCONDITION":
        return action.payload;
      default:
        return state;
    }
  }