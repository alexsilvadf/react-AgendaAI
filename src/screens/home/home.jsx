import { View, Text, FlatList } from "react-native";
import { styles } from "./home.style.js";
import { doctors } from "../../constantes/data.js";
import  Doctor  from "../../components/doctor/doctor.jsx"
import icon from "../../constantes/icon.js"

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agente os seus serviços médicos.</Text>

      <FlatList
        data={doctors}
        keyExtractor={(doc) => doc.id_doctor}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Doctor name={item.name} icon={item.icon == "M" ? icon.male : icon.female} specialty={item.specialty}/>
        }}
      />
    </View>
  );
}

export default Home;


// https://www.figma.com/design/QkyPwLwIGiuD41BNYtOz9k/Agendei-JS?node-id=0-1&node-type=canvas&t=7noRrLw5sPGGKh7f-0