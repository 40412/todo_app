import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { globalStyles } from "../../constants/styles";

export const AddTask = ({ currentValue, setValue, addTask }) => {
  return (
    <View style={styles.innerContainer}>
      <TextInput
        id="input"
        style={styles.input}
        placeholder="Describe a task"
        value={currentValue}
        onChangeText={setValue}
      />
      <Pressable
        style={globalStyles.button}
        onPress={() => addTask(currentValue)}
      >
        <Text style={globalStyles.buttonText}>Add Task</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: 10,
    paddingTop: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    textAlign: "center",
    fontSize: 15,
    padding: 3,
    height: 45,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    width: "100%",
  },
});
