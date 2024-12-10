import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../constants/styles";
import { logout } from "../../util/authentication";

export const Profile = ({ navigation }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("useEffect");
    getEmail();
  }, []);

  const getEmail = async () => {
    const user = await SecureStore.getItemAsync("email");
    console.log(user);
    setEmail(user);
  };
  const handleLogOut = async () => {
    await logout();
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  return (
    <View style={styles.container}>
      <Text style={globalStyles.pageTitle}>My Profile</Text>
      <Text style={styles.normalText}>Currently logged in as:</Text>
      <Text style={styles.email}>{email}</Text>
      <Pressable style={globalStyles.button} onPress={handleLogOut}>
        <Text style={globalStyles.buttonText}>Log Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  normalText: {
    fontSize: 15,
  },
  email: {
    fontSize: 25,
  },
});
