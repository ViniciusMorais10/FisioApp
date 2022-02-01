import React from 'react';
import { Home } from './src/pages/Home';
import { StatusBar } from 'react-native';
import { Session } from './src/pages/Session';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content'/>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
        name= 'Home'
        component={Home}
        />
        <Stack.Screen
        name='Session'
        component={Session}
        />
      </Stack.Navigator>
    </NavigationContainer>
    /* <StatusBar barStyle='dark-content'/>
    <RootStack /> */

 
  );
}



