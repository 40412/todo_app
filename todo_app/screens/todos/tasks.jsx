import { FlatList, StyleSheet, Text, View } from "react-native";

export const Tasks = ({ tasks }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => {
          return (
            <View style={styles.taskItem}>
              <Text style={styles.text}>{item}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  taskItem: {
    height: 40,
    backgroundColor: "#FFCCE1",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 15,
    color: "black",
    padding: 5,
  },
});
