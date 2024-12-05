import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Login } from "./screens/login/login";
import { Signup } from "./screens/signup/signup";
import { Todos } from "./screens/todos/todoScreen";

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

const MainContent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Todos" component={Todos} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Todos />
      {/* <NavigationContainer>
        <MainContent />
        <LoginStack />
      </NavigationContainer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
