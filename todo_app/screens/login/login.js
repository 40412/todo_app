import React, { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { globalStyles } from "../../constants/styles";
import { login } from "../../util/authentication";

export const Login = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  const [password, onChangePassword] = useState("");
  const [message, setMessage] = useState("");

  const loginHandler = async () => {
    try {
      const response = await login(text, password);
      navigation.replace("Main", { message: message });
    } catch (error) {
      Alert.alert("An error occurred! Check your credentials");
    }
  };

  const debugLogin = async () => {
    await login("testuser@email.com", "password123");
    navigation.replace("Main", { message: message });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setMessage}
        value={message}
        placeholder="Send a message!"
      />
      <View style={styles.buttonContainer}>
        <Pressable style={globalStyles.button} onPress={loginHandler}>
          <Text style={globalStyles.buttonText}>Login</Text>
        </Pressable>
        <Pressable
          style={globalStyles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={globalStyles.buttonText}>Sign Up</Text>
        </Pressable>
        {/* <Button title="debug" onPress={debugLogin}></Button> */}
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
