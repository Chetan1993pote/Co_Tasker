import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Login, selectCategory, SignUp, PasswordLogin, VerifyEmail, DetailsForm, CreatePwd, LoginOption, PwdConfirmPwd, filterTasks, selectLocation, TaskAd } from '../Screens';
import Tabber from '../Navigation/Tabber'
import PickIntrest from '../Screens/ChooseIntrest/PickIntrest';
import { Image, TouchableOpacity } from 'react-native';
//import { TaskAd } from '../Screens/Notifications/TaskAd';

var backImg = require('../Screens/TabBar/TabIcons/back_white.png');

const Stack = createNativeStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordLogin" component={PasswordLogin} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} options={{ headerShown: false }} />
        <Stack.Screen name="DetailsForm" component={DetailsForm} options={{ headerShown: false }} />
        <Stack.Screen name="CreatePwd" component={CreatePwd} options={{ headerShown: false }} />
        <Stack.Screen name="LoginOption" component={LoginOption} options={{ headerShown: false }} />
        <Stack.Screen name="PickIntrest" component={PickIntrest} options={{ headerShown: false }} />
        <Stack.Screen name="Tabber" component={Tabber} options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmPwd" component={PwdConfirmPwd} options={{ headerShown: false }} />

        <Stack.Screen name="filterTasks" component={filterTasks} options={{}} />

        <Stack.Screen name="selectCategory" component={selectCategory} options={{}}/>
      
        <Stack.Screen name="selectLocation" component={selectLocation} options={{}} />

        <Stack.Screen name="TaskAd" component={TaskAd} options={{}} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;