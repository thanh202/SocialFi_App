import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  TransitionSpecs,
  createStackNavigator,
} from '@react-navigation/stack';
import Login from '../screens/Login';
import Chat from '../screens/Chat';
import BottomTabNavigation from './BottomTabNavigation';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="profile" component={Profile} />
        {/* <Stack.Screen name="main" component={BottomTabNavigation} /> */}
        <Stack.Screen
          name="chat"
          component={Chat}
          options={{
            transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
            },
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureResponseDistance: 115,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
