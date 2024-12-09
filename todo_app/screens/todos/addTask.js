import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export const AddTask = ({ currentValue, setValue, addTask }) => {
  return (
    <View style={styles.innerContainer}>
      <Pressable style={styles.button} onPress={() => addTask(currentValue)}>
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>

      <TextInput
        id="input"
        style={styles.input}
        placeholder="Describe a task"
        value={currentValue}
        onChangeText={setValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    marginTop: 10,
    paddingTop: 10,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    padding: 10,
    marginRight: 20,
    width: "35%",
    backgroundColor: "blue",
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
  input: {
    flex: 2,
    textAlign: "center",
    fontSize: 15,
    padding: 3,
    height: 45,
  },
});
