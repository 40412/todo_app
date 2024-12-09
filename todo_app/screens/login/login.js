import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { globalStyles } from "../../constants/styles";

export const Login = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const handleLogin = () => {
    navigation.replace("Main");
  };


  return (
    <View style={styles.container}>
      <Text style={globalStyles.buttonText}>Login</Text>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder="Username" />
      <TextInput style={styles.input} onChangeText={onChangePassword} value={text} placeholder="Password" secureTextEntry={true} />
      <Button title="Login" onPress={handleLogin} style={globalStyles.button} />
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} style={globalStyles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
});
