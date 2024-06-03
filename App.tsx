import { StatusBar, View } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View>
      <StatusBar barStyle="light-content" translucent></StatusBar>
      <Home />
    </View>
  );
}
