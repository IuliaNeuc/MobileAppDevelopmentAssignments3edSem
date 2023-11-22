// AboutScreen.js

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
const AboutScreen = ({ navigation }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.appName}>My To-Do List App</Text>
        <Text style={styles.authorName}>Author: Your Name</Text>
        <Text style={styles.currentDate}>Current Date: {currentDate}</Text>

        {/* Navigate back to the "Home" screen */}
        <Button
          title="Go back to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </MainLayout>
  );
};



export default AboutScreen;
