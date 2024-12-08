import React from "react";
import { Button, Text, View } from "react-native";
import { globalStyles } from "../../constants/styles";

export const Profile = ({ navigation }) => {
  const handleLogOut = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  return (
    <View>
      <Text style={globalStyles.pageTitle}>My Profile</Text>
      <Button title="Log Out" onPress={handleLogOut} />
    </View>
  );
};
