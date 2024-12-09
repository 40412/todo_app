import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { globalStyles } from "../../constants/styles";

export const Login = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  const [password, onChangePassword] = useState("");

  const handleLogin = () => {
    navigation.replace("Main");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={text}
        placeholder="Password"
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Pressable style={globalStyles.button} onPress={handleLogin}>
          <Text style={globalStyles.buttonText}>Login</Text>
        </Pressable>
        <Pressable
          style={globalStyles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={globalStyles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  input: {
    height: 40,
    width: "50%",
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  buttonContainer: {
    width: "100%",
    paddingTop: 20,
    alignItems: "center",
  },
});
