import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./screens/login/login";
import { Profile } from "./screens/profile/profile";
import { SignUpScreen } from "./screens/signup/signup";
import { Todos } from "./screens/todos/todoScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainContent = ({ route }) => {
  const { message } = route.params || {};
  return (
    <Tab.Navigator>
      <Tab.Screen name="Todos" component={Todos} initialParams={{ message }} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={MainContent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
