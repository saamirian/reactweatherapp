export default function location (state = "Melbourne", action) {

    switch (action.type) {
        case "INSERT_LOCATION":
          return (action.payload);
        default:
          return state;
      }
}