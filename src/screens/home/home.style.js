import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONT_SIZE } from "../../constantes/theme.js";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    padding: 12,
  },
  text:{
      fontSize: FONT_SIZE.md,
      color: COLORS.grey1,
      marginBottom: 15,
      marginLeft: 10
  }
  
});
