import { Button, Text } from "react-native";
import { globalStyles } from "../../constants/styles";

export const Signup = ({ navigation }) => {
  const handleSignup = () => {
    navigation.replace("Main");
  };
  return (
    <>
      <Text style={globalStyles.pageTitle}>Sign Up</Text>
      <Button title="Sign Up" onPress={handleSignup} />
    </>
  );
};
