import { useState } from "react";
import { View } from "react-native";
import { AddTask } from "./addTask";
import { Tasks } from "./tasks";

export const Todos = () => {
  const [tasks, setTasks] = useState([]);
  const [currentValue, setValue] = useState("");

  const addTask = (task) => {
    if (task) {
      setTasks([...tasks, task]);
      setValue("");
    }
  };

  return (
    <>
      <AddTask
        currentValue={currentValue}
        addTask={addTask}
        setValue={setValue}
      />

      <View /* style={styles.divider} */ />

      <Tasks tasks={tasks} />
    </>
  );
};

/* const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: "grey",
    marginHorizontal: 10,
    marginTop: 35,
    marginBottom: 20,
  },
}); */
