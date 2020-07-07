import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName='Welcome'>
         <Stack.Screen name='Welcome' component={WelcomeScreen} />
         <Stack.Screen name='Video Player' component={ViewImageScreen} />
       </Stack.Navigator>
     </NavigationContainer>
  );
}
