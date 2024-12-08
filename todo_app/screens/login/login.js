import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../constants/styles";

export const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.replace("Main");
  };
  return (
    <View style={styles.container}>
      <Text style={globalStyles.pageTitle}>Login</Text>
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
