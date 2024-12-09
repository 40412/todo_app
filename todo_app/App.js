import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { login } from "./util/authentication";
import { Profile } from "./screens/profile/profile";
import { createNewUser } from "./util/authentication";
import { Todos } from "./screens/todos/todoScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainContent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Todos" component={Todos} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="SignUp" component={createNewUser} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={MainContent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
