import { Pressable, Text } from "react-native";
import { globalStyles } from "../../constants/styles";

export const Signup = ({ navigation }) => {
  const handleSignup = () => {
    navigation.replace("Main");
  };
  return (
    <>
      <Pressable style={globalStyles.button} onPress={handleSignup}>
        <Text style={globalStyles.buttonText}>Sign Up</Text>
      </Pressable>
    </>
  );
};
