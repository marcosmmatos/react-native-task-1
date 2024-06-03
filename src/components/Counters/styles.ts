import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  counters: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 16,
    borderBottomWidth: 0.2,
    borderColor: "#D9D9D9",
    marginHorizontal: 26,
  },

  counter: {
    flexDirection: "row",
  },

  count: {
    marginLeft: 10,
    color: "#FFF",
    borderRadius: 50,
    textAlign: "center",
    borderColor: "#333333",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    backgroundColor: "#333333",
  },

  created: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4EA8DE",
  },

  done: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8284FA",
  },
});
