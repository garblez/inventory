import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import KitchenScreen from './src/screens/KitchenScreen';
import FoodEditScreen from './src/screens/FoodEditScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Kitchen">
        <Stack.Screen 
          name="Kitchen" 
          component={KitchenScreen} 
          options={{ title: "My kitchen" }}/>
        <Stack.Screen 
          name="FoodEdit" 
          component={FoodEditScreen} 
          options={{ title: "Add or change a food item" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
