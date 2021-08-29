import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SpaceCraftsScreen from './screens/SpaceCraftsScreen';
import DailyPicScreen from './screens/DailyPicScreen';
import StarMapScreen from './screens/StarMapScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "HomeScreen" screenOptions = {{
        headerShown: false
      }}>
        <Stack.Screen name = "HomeScreen" component = {HomeScreen}/>
        <Stack.Screen name = "SpaceCraftsScreen" component = {SpaceCraftsScreen}/>
        <Stack.Screen name = "DailyPicScreen" component = {DailyPicScreen}/>
        <Stack.Screen name = "StarMapScreen" component = {StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
