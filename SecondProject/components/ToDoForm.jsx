import React from "react";
import {View, TextInput, Button, StyleSheet} from 'react-native';


export default function ToDoForm({addTask}){
  const [task, setTask] = React.useState('');

  const handleAddTask =()=> {
    addTask(task);
    setTask('');
  }
 return(
<View style={styles.form}>
<TextInput
  style={styles.input}
  placeholder="Add a new task..."
  value = {task}
  onChangeText={(text) => setTask(text)}
/>
<Button title="Add Task" onPress={handleAddTask} />
</View>);
}

const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });