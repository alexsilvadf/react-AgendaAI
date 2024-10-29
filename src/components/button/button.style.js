import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constantes/theme.js"

export const styles = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: COLORS.blue,
    borderRadius: 6,
    padding: 12,
    marginTop: 20,
  },
  text: {
    color: "#fff",
    fontSize: FONT_SIZE.md,
    textAlign: "center",
  },
});
