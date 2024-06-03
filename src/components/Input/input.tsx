import { View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  handleAddTask: () => void;
  taskDescription: string;
  setTaskDescription: any;
};

export default function Input({
  handleAddTask,
  setTaskDescription,
  taskDescription,
}: Props) {
  return (
    <View>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("./assets/Logo.png")} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskDescription}
          value={taskDescription}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Image source={require("./assets/add.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
