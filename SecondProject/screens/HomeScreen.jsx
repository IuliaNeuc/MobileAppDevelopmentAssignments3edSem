// HomeScreen.jsx

import React from 'react';
import { SafeAreaView, ScrollView, View, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = React.useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <ScrollView>
          <ToDoList tasks={tasks} />
        </ScrollView>
        <View style={styles.form}>
          <ToDoForm addTask={addTask} />
        </View>
        
        {/* Navigate to the "About" screen */}
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </SafeAreaView>
    </MainLayout>
  );
};



export default HomeScreen;
