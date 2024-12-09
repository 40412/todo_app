import { Button, Text } from "react-native";
import { globalStyles } from "../../constants/styles";

export const Signup = ({ navigation }) => {
  const handleSignup = () => {
    navigation.replace("Main");
  };
  return (
    <>
      <Text style={globalStyles.buttonText}>Sign Up</Text>
      <Button title="Sign Up" onPress={handleSignup} style={globalStyles.button} />
    </>
  );
};
