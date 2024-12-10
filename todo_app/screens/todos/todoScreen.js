import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AddTask } from "./addTask";
import { Tasks } from "./tasks";

export const Todos = ({ route }) => {
  const [tasks, setTasks] = useState([]);
  const [currentValue, setValue] = useState("");

  const { message } = route.params;

  const addTask = (task) => {
    if (task) {
      setTasks([...tasks, task]);
      setValue("");
    }
  };

  return (
    <View style={styles.container}>
      {message && <Text>{message}</Text>}
      <AddTask
        currentValue={currentValue}
        addTask={addTask}
        setValue={setValue}
      />

      <View style={styles.divider} />

      <Tasks tasks={tasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: "grey",
    marginHorizontal: 10,
    marginTop: 35,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 40,
  },
});
