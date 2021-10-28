import { NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash,Login,SignUp,PasswordLogin ,VerifyEmail,DetailsForm, CreatePwd,LoginOption, PwdConfirmPwd, filterTasks} from '../Screens';
import Tabber from '../Navigation/Tabber'
import PickIntrest from '../Screens/ChooseIntrest/PickIntrest';
import { Image,TouchableOpacity,Modal} from 'react-native';


var backImg = require('../Screens/TabBar/TabIcons/back_white.png');


const Stack = createNativeStackNavigator();

const Routes = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Splash">
        <Stack.Screen name="Splash"  component={Splash} options={{ headerShown: false }}/>
        <Stack.Screen name="Login"  component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp"  component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="PasswordLogin"  component={PasswordLogin} options={{ headerShown: false }}/>
        <Stack.Screen name="VerifyEmail"  component={VerifyEmail} options={{ headerShown: false }}/>
        <Stack.Screen name="DetailsForm"  component={DetailsForm} options={{ headerShown: false }}/>
        <Stack.Screen name="CreatePwd"  component={CreatePwd} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginOption"  component={LoginOption} options={{ headerShown: false }}/>
        <Stack.Screen name="PickIntrest"  component={PickIntrest} options={{ headerShown: false }}/>
        <Stack.Screen name="Tabber"  component={Tabber} options={{ headerShown: false }}/>
        <Stack.Screen name="ConfirmPwd"  component={PwdConfirmPwd} options={{ headerShown: false }}/>
        <Stack.Screen name="filterTasks"  component={filterTasks} options={{ title: 'Filter Task',
                headerTintColor: 'white',
                presentation:'fullScreenModal',
                headerStyle: {
                    backgroundColor: '#0E203A'
                },
                headerLeft: () => <TouchableOpacity>
              <Image
                resizeMode='contain'
                source={backImg}
                style={{ height: 18, width: 18,marginRight:15}}/>
                </TouchableOpacity>
                

                
                }}/>


        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  export default Routes;