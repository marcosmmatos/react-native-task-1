import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  task: string[];
  completedTask: string[];
};

export default function Counter({ task, completedTask }: Props) {
  return (
    <View style={styles.counters}>
      <View style={styles.counter}>
        <Text style={styles.created}>Criadas</Text>
        <Text style={styles.count}>{task.length}</Text>
      </View>
      <View style={styles.counter}>
        <Text style={styles.done}>Concluídas</Text>
        <Text style={styles.count}>{completedTask.length}</Text>
      </View>
    </View>
  );
}
