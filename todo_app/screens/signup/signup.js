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
import { createNewUser } from "../../util/authentication";

export const SignUpScreen = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  const [password, onChangePassword] = useState("");

  const signingUpHandler = async () => {
    try {
      const response = await createNewUser(text, password);
      Alert.alert("Success", "User created successfully!");
      navigation.replace("Main");
    } catch (error) {
      Alert.alert("An error occurred!", JSON.stringify(error));
    }
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
      <Pressable style={globalStyles.button} onPress={signingUpHandler}>
        <Text style={globalStyles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "50%",
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
});
