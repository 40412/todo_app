import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomFlatButton from '../ui/CustomFlatButton';
import AuthenticationForm from './AuthenticationForm';

const AuthenticationContent = ({ isLoggedIn, onAuthenticate: onAuthentication }) => {

  const navigation = useNavigation();

  const authencationModeHandler = () => {
    if (isLoggedIn) {
      navigation.replace('Signup');
    } else {
      navigation.replace('Login');
    }
  };

  const submitHandler = (credentials) => {
    let { email, password } = credentials;
    email = email.trim();
    password = password.trim();
    onAuthentication({ email, password });
  };

  return (
    <View style={styles.authenticationContent}>
      <AuthenticationForm
        isLoggedIn={isLoggedIn}
        onSubmit={submitHandler}
      />
      <View style={styles.button}>
        <CustomFlatButton onPress={authencationModeHandler}>
          {isLoggedIn ? 'Sign Up' : 'Log in'}
        </CustomFlatButton>
      </View>
    </View>
  );
};

export default AuthenticationContent;

const styles = StyleSheet.create({
  authenticationContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    backgroundColor: "white"
  },
  button: {
    marginTop: 8,
  },
});
