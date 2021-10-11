import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash,Login } from '../Screens';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Splash">
        <Stack.Screen name="Splash"  component={Splash} options={{ headerShown: false }}/>
        <Stack.Screen name="Login"  component={Login} options={{ headerShown: false }}/>

        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  export default Routes;