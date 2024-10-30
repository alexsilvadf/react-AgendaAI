import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONT_SIZE } from "../../constantes/theme.js";

export const styles = StyleSheet.create({
  doctor: {
    flex: 1,  
    backgroundColor: COLORS.white,
    padding: 8,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.grey4,
    marginTop: 3,
    marginBottom: 3,
    borderRadius: 6
  },
  name:{
      fontSize: FONT_SIZE.md,
      color: COLORS.grey1,
      marginTop: 5
  },
  specialty:{
    fontSize: FONT_SIZE.md,
    color: COLORS.grey3,
},
icon:{
    width: 50,
    height: 50,
    marginRight: 8
}
  
});
