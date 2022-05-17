import { Platform } from "react-native";

export default {
  text: {
    fontSize: 17,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: '#000',
  },
};
