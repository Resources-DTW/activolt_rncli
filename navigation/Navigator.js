import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import ScanScreen from '../screens/ScanScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{}}>
        <Stack.Screen
          name="Splash"
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Login"
          options={{
            gestureEnabled: false,
            headerStyle: {backgroundColor: '#00A66E'},
            headerTitleStyle: {color: '#00A66E'},
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerBackVisible: false,
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Scan"
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
          component={ScanScreen}
        />
        <Stack.Screen
          name="Home"
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
