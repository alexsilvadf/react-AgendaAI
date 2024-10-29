import { Text, TouchableOpacity, Alert } from "react-native";
import { styles } from './button.style.js';

function Button(props) {

  function clicou() {
    alert("Teste");
  }

  return (
    <TouchableOpacity onPress={clicou} style={styles.btn}>
      <Text style={styles.text}>Acessar</Text>
    </TouchableOpacity>
  );
}

export default Button;
