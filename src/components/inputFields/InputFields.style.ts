import { StyleSheet } from "react-native";
import globalStyle from "../../global/globalStyle";

export default  StyleSheet.create({
  title: {
    color: globalStyle.color.base.default,
    fontSize: globalStyle.font.title
  },
  input: {
    padding: 8,
    marginTop: 4,
    borderRadius: 6,
    backgroundColor: globalStyle.color.surface.light,
    fontSize: globalStyle.font.content,
    color: globalStyle.color.base.contrast,
  }
})
