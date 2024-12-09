import React from "react";
import { Button, Text, StyleSheet, Alert, View } from "react-native";
import { globalStyles } from "../../constants/styles";
import AuthenticationContent from "../../components/auth/AuthenticationContent";
import { createNewUser } from "../../util/authentication";

const SignUpScreen = ({ navigation }) => {
  const signingUpHandler = async ({ email, password }) => {
    try {
      const response = await createNewUser(email, password);
      Alert.alert("Success", "User created successfully!");
      navigation.replace("Main");
    } catch (error) {
      Alert.alert("An error occurred!", JSON.stringify(error));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={globalStyles.pageTitle}>Sign Up</Text>
      <AuthenticationContent onAuthentication={signingUpHandler} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
