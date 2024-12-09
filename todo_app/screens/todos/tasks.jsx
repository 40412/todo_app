import { FlatList, StyleSheet, Text, View } from "react-native";

export const Tasks = ({ tasks }) => {
  return (
    <View>
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
  taskItem: {
    height: 40,
    backgroundColor: "lightblue",
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 15,
    color: "blue",
    padding: 5,
  },
});
