import { View, Text, TextInput, StyleSheet } from 'react-native';

import { Colors } from '../../constants/styles';

const CustomInput = ({
  label,
  secure,
  onUpdateValue,
  value
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize={false}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: "lightblue",
    marginBottom: 6,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 6,
    backgroundColor: "white",
    fontSize: 18,
  }
});
