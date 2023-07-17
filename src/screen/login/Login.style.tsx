import { StyleSheet } from "react-native";
import globalStyle from "../../global/globalStyle";

export default  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyle.color.primary.default,
    justifyContent: 'center',
    padding: 16
  },
  inputContainer: {
    marginTop: 8
  }
})


