import { View, Image, Text, TouchableOpacity } from "react-native";

type Props = {
  onRemove: () => void;
};

export default function DeleteButton({ onRemove }: Props) {
  return (
    <TouchableOpacity onPress={onRemove}>
      <Image source={require("./assets/trash.png")} />
    </TouchableOpacity>
  );
}
