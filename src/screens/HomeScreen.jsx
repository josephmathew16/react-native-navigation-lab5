import React from 'react';
import { Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const HomeScreen = ({ navigation }) => (
  <MainLayout>
    <ToDoForm />
    <ToDoList />
    <Button
      title="Go to About"
      onPress={() => navigation.navigate('About')}
    />
  </MainLayout>
);

export default HomeScreen;
