import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

// Define your ToDoList component here lab 2 code
// export default function ToDoList({tasks})
// { return(
//     <ScrollView>
// <Pressable>
//   <View style={[styles.task, styles.completed]}>
//     <Text style={styles.taskText}>Do laundry</Text>
//   </View>
// </Pressable>
// <Pressable>
//   <View style={[styles.task]}>
//     <Text style={styles.taskText}>Go to gym</Text>
//   </View>
// </Pressable>
// <Pressable>
//   <View style={[styles.task, styles.completed]}>
//     <Text style={styles.taskText}>Walk dog</Text>
//   </View>
// </Pressable>
// </ScrollView>);

// }

// LAB 3 CODE:
export default function ToDoList({tasks}){
  return(
    <ScrollView>
      {tasks.map((task,index)=>(
        <Pressable key={index}>
          <View style = {[styles.task, styles.completed]}>
            <Text style={style.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    }
  });