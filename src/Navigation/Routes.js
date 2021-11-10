
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { Dimensions } from 'react-native';



import Tabber from '../Navigation/Tabber';
import PickIntrest from '../Screens/ChooseIntrest/PickIntrest';
import PostATask from '../Screens/Post_A_Task/PostATask';
import Splash from '../Screens/Splash/Splash';
import Login from '../Screens/Login/Login';
import selectCategory from '../Screens/Filter_Tasks/selectCategory';
import SignUp from '../Screens/SignUp/SignUp';
import PasswordLogin from '../Screens/Password/PasswordLogin';
import VerifyEmail from '../Screens/VerifyEmail/VerifyEmail';
import DetailsForm from '../Screens/DetailsForm/DetailsForm';
import CreatePwd from '../Screens/CreatePassword/CreatePwd';
import LoginOption from '../Screens/LoginOption/LoginOptions';
import PwdConfirmPwd from '../Screens/SignUp/PwdConfirmPwd';
import filterTasks from '../Screens/Filter_Tasks/filterTasks';
import selectLocation from '../Screens/Filter_Tasks/selectLocation';
import TaskAd from '../Screens/Notifications/TaskAd';
import HelpCenter from '../Screens/Notifications/HelpCenter';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContents from '../Screens/Drawer_Contents/DrawerContents'

const win = Dimensions.get('window');



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function MenuDrawer(){

  return (
    <Drawer.Navigator drawerStyle={{
      width: win.width
    }}
    drawerContent={props => <DrawerContents {...props}/>} >
     <Stack.Screen name="Tabber" component={Tabber} options={{ headerShown: false }} />

      <Drawer.Screen name="HelpCenter" component={HelpCenter} />
      <Drawer.Screen name="TaskAd" component={TaskAd} />
      <Drawer.Screen name="PostATask" component={PostATask} />

    </Drawer.Navigator>
  )
}

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
        <Stack.Screen name="Tabber" component={MenuDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmPwd" component={PwdConfirmPwd} options={{ headerShown: false }} />

        <Stack.Screen name="filterTasks" component={filterTasks} options={{}} />

        <Stack.Screen name="selectCategory" component={selectCategory} options={{}} />

        <Stack.Screen name="selectLocation" component={selectLocation} options={{}} />

        <Stack.Screen name="TaskAd" component={TaskAd} options={{}} />
        <Stack.Screen name="HelpCenter" component={HelpCenter} options={{}} />
        <Stack.Screen name="PostATask" component={PostATask} options={{}} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;

