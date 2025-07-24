import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const currentDate = new Date().toLocaleDateString();
  const showEasterEgg = () => Alert.alert("🎉 Easter Egg 🎉", "Hi, I'm Joseph Mathew!");

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>ToDo App</Text>
        <TouchableOpacity onPress={showEasterEgg}>
          <Text style={styles.subtitle}>Developed by Joseph Mathew</Text>
        </TouchableOpacity>
        <Text style={styles.date}>{currentDate}</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 5 },
  date: { fontSize: 14, color: 'gray' },
});

export default AboutScreen;
