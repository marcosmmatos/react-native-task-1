import { View, Image, Text } from "react-native";
import { styles } from "./styles";

export default function EmptyList() {
  return (
    <View style={styles.emptyList}>
      <Image source={require("./assets/clipboard.png")} />
      <View>
        <Text style={styles.emptyListHeader}>
          Você não tem tarefas pendentes!
        </Text>
        <Text style={styles.emptyListContent}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
