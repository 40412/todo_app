import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../constants/styles";
import { logout } from "../../util/authentication";

export const Profile = ({ navigation }) => {
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
});
