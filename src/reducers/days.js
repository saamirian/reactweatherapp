export default function location (state = "5", action) {

    switch (action.type) {
        case "INSERT_DAYS":
          return (action.payload);
        default:
          return state;
      }
}