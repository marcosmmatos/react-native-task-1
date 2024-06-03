import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import DeleteButton from "../DeleteButton/deleteButton";

type Props = {
  description: string;
  onRemove: () => void;
  onUndo: () => void;
};

export default function Task({ description, onRemove, onUndo }: Props) {
  return (
    <View>
      <View style={styles.taskContainer}>
        <TouchableOpacity onPress={onUndo}>
          <Image source={require("./assets/completed-check.png")} />
        </TouchableOpacity>
        <Text style={styles.taskText}>{description}</Text>
        <DeleteButton onRemove={onRemove} />
      </View>
    </View>
  );
}
