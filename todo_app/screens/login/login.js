import React from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import { login } from "../../util/authentication";
import AuthenticationContent from "../../components/auth/AuthenticationContent"; 

const LoginScreen = ({ navigation }) => {
  const loginHandler = async ({ email, password }) => {
    try {
      const response = await login(email, password);
      Alert.alert("Response", JSON.stringify(response));
      navigation.replace("Main"); 
    } catch (error) {
      Alert.alert("An error occurred!", JSON.stringify(error));
    }
  };

  return (
    <AuthenticationContent
      isLoggedIn={false}
      onAuthentication={loginHandler}
    />
  );
};

export default LoginScreen;
