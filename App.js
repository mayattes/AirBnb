import { StackNavigator } from "react-navigation";
import Welcome from "./src/Welcome/Welcome";
import MonAirbnb from "./src/MonAirbnb/MonAirbnb";
import Room from "./src/Room/Room";

console.ignoredYellowBox = ["Warning: componentWill"];

export default StackNavigator(
  {
    Welcome: {
      screen: Welcome
    },
    MonAirbnb: {
      screen: MonAirbnb
    },
    Room: {
      screen: Room
    }
  },
  {
    initialRouteName: "Welcome"
  }
);
