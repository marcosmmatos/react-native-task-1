import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    height: 72,
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 26,
    borderRadius: 10,
    marginBottom: 8,
    padding: 8,
  },

  taskText: {
    width: 235,
    marginHorizontal: 14,
    color: "#808080",
    fontSize: 16,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});
