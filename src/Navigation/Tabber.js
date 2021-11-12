
import React from 'react';
import { Image} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import TabMyTasksVC from '../Screens/TabBar/TabScreens/TabMyTasksVC';
import TabMessagesVC from '../Screens/TabBar/TabScreens/TabMessagesVC';
import TabNotifications from '../Screens/TabBar/TabScreens/TabNotifications';
import TabPostVC from '../Screens/TabBar/TabScreens/TabPostVC';
import TabBrowseTasks from '../Screens/TabBar/TabScreens/TabBrowseTasks';
import AppTheme from '../AppTheme';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


var searchIcon = require('../Screens/TabBar/TabIcons/search.png');


const Tabber = () => {
    
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false
            }}

        >
            <Tab.Screen name="MyTasks" component={TabMyTasksVC} options={{
                title: 'My Tasks',
                headerTitleStyle:{
                    fontFamily:AppTheme.semiboldfont,
                    fontSize:18
                    
                },
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: AppTheme.appThemeColor
                },
                tabBarIcon: ({ focused }) => {
                    const image = focused
                        ? require('../Screens/TabBar/TabIcons/task_1.png')
                        : require('../Screens/TabBar/TabIcons/task.png')
                    return (
                        <Image
                            resizeMode='contain'
                            source={image}
                            style={{ height: 20, width: 20 }}
                        />
                    )
                }
            }} />
            <Tab.Screen name="Messages" component={TabMessagesVC} options={{
                title: 'Messages',
                headerTintColor: 'white',
                headerTitleStyle:{
                    fontFamily:AppTheme.semiboldfont,
                    fontSize:18
                    
                },
                headerStyle: {
                    backgroundColor: AppTheme.appThemeColor
                },
                tabBarIcon: ({ focused }) => {
                    const image = focused
                        ? require('../Screens/TabBar/TabIcons/chat_1.png')
                        : require('../Screens/TabBar/TabIcons/chat.png')
                    return (
                        <Image
                            resizeMode='contain'
                            source={image}
                            style={{ height: 20, width: 20 }}
                        />
                    )
                }
            }} />
            <Tab.Screen name="PostTasks" component={TabPostVC} options={{
                title: 'Post a Task',
                headerTitleStyle:{
                    fontFamily:AppTheme.semiboldfont,
                    fontSize:18
                    
                },
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: AppTheme.appThemeColor
                },
                tabBarIcon: ({ focused }) => {
                    const image = focused
                        ? require('../Screens/TabBar/TabIcons/home_1.png')
                        : require('../Screens/TabBar/TabIcons/home.png')
                    return (
                        <Image
                            resizeMode='contain'
                            source={image}
                            style={{ height: 55, width: 55, marginBottom: 25 }}
                        />
                    )
                }
            }} />
            <Tab.Screen name="Notifications" component={TabNotifications} options={{
                title: 'Notifications',
                headerTitleStyle:{
                    fontFamily:AppTheme.semiboldfont,
                    fontSize:18
                    
                },
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: AppTheme.appThemeColor
                },
                tabBarIcon: ({ focused }) => {
                    const image = focused
                        ? require('../Screens/TabBar/TabIcons/notification_1.png')
                        : require('../Screens/TabBar/TabIcons/notification.png')
                    return (
                        <Image
                            resizeMode='contain'
                            source={image}
                            style={{ height: 20, width: 20 }}
                        />
                    )
                }
            }} />
            <Tab.Screen name="BrowseTasks" component={TabBrowseTasks} options={{
                title: 'Browse Tasks',
                headerTintColor: 'white',
                headerTitleStyle:{
                    fontFamily:AppTheme.semiboldfont,
                    fontSize:18
                    
                },
                headerStyle: {
                    backgroundColor: AppTheme.appThemeColor
                },
                headerRight: () => <Image
                resizeMode='contain'
                source={searchIcon}
                style={{ height: 18, width: 18,marginRight:15 }}
            />,
                tabBarIcon: ({ focused }) => {
                    const image = focused
                        ? require('../Screens/TabBar/TabIcons/selected_available.png')
                        : require('../Screens/TabBar/TabIcons/unselected_available.png')
                    return (
                        <Image
                            resizeMode='contain'
                            source={image}
                            style={{ height: 20, width: 20 }}
                        />
                    )
                }
            }} />
        </Tab.Navigator>
    );
}

export default Tabber;