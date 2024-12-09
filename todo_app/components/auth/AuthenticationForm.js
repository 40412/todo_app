import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import CustomButton from '../ui/CustomButton';
import CustomInput from './CustomInput';

const AuthenticationForm = ({ isLoggedIn, onSubmit }) => {

  const [filledInEmail, setFilledInEmail] = useState('');
  const [filledInPassword, setFilledInPassword] = useState('');
  const [filledInConfirmPassword, setFilledInConfirmPassword] = useState('');

  const updateInputValueHandler = (inputType, FilledInValue) => {
    switch (inputType) {
      case 'email':
        setFilledInEmail(FilledInValue);
        break;
      case 'password':
        setFilledInPassword(FilledInValue);
        break;
      case 'confirmPassword':
        setFilledInConfirmPassword(FilledInValue);
        break;
    }
  };

  const submitHandler = () =>{
    onSubmit({
      email: filledInEmail,
      password: filledInPassword,
      confirmPassword: filledInConfirmPassword,
    });
  };

  return (
    <View style={styles.form}>
      <View>
        <CustomInput
          label="Email Address"
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={filledInEmail}
        />
        <CustomInput
          label="Password"
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          secure
          value={filledInPassword}
        />
        {!isLoggedIn && (
          <CustomInput
            label="Confirm Password"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              'confirmPassword'
            )}
            secure
            value={filledInConfirmPassword}
          />
        )}
        <View style={styles.button}>
          <CustomButton onPress={submitHandler}>
            {isLoggedIn ? 'Log In' : 'Sign Up'}
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

export default AuthenticationForm;

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
  },
});
