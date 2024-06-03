import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import DeleteButton from "../DeleteButton/deleteButton";

type Props = {
  description: string;
  onRemove: () => void;
  onComplete: () => void;
};

export default function Task({ description, onRemove, onComplete }: Props) {
  return (
    <View>
      <View style={styles.taskContainer}>
        <TouchableOpacity onPress={onComplete}>
          <Image source={require("./assets/check.png")} />
        </TouchableOpacity>
        <Text style={styles.taskText}>{description}</Text>
        <DeleteButton onRemove={onRemove} />
      </View>
    </View>
  );
}
