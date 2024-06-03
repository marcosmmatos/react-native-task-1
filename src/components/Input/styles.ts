import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    height: "100%",
    flex: 0,
  },

  header: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D0D0D",
  },

  logo: {
    marginRight: 24,
  },

  form: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 54,
    flex: 1,
  },

  input: {
    height: 54,
    backgroundColor: "#333333",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    width: 280,
    marginRight: 4,
  },

  addButton: {
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
  },
});
