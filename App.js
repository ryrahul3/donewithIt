import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import CameraScreen from './app/screens/CameraScreen';

const Stack = createStackNavigator();
const MainStack = createStackNavigator();
function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={WelcomeScreen} />
    
    </MainStack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode='modal' headerMode='none'>
        <Stack.Screen name='Main' component={MainStackScreen} />
        <Stack.Screen name='Camera' component={CameraScreen} />
        <Stack.Screen name='Video Player' component={ViewImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
