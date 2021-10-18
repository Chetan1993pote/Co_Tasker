
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabMyTasksVC  from '../Screens/TabBar/TabScreens/TabMyTasksVC';
import TabMessagesVC  from '../Screens/TabBar/TabScreens/TabMessagesVC';
import TabNotifications  from '../Screens/TabBar/TabScreens/TabNotifications';
import TabPostVC  from '../Screens/TabBar/TabScreens/TabPostVC';
import TabBrowseTasks  from '../Screens/TabBar/TabScreens/TabBrowseTasks';

const Tab = createBottomTabNavigator();


const Tabber = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      showLabel:false
    }}
    
    >
      <Tab.Screen name="MyTasks" component={TabMyTasksVC} options={{
         tabBarIcon: ({ focused }) => {
          const image = focused
          ? require('../Screens/TabBar/TabIcons/task_1.png')
          : require('../Screens/TabBar/TabIcons/task.png')
          return (
              <Image
              resizeMode='contain'
                  source={image}
                  style={{height:25, width:25}}
              />
          )
      }}}/>
      <Tab.Screen name="Messages" component={TabMessagesVC} options={{
         tabBarIcon: ({focused}) => {
          const image = focused
          ? require('../Screens/TabBar/TabIcons/chat_1.png')
          : require('../Screens/TabBar/TabIcons/chat.png')
          return (
              <Image
              resizeMode='contain'
                  source={image}
                  style={{height:25, width:25}}
              />
          )
      }}}/>
      <Tab.Screen name="PostTasks" component={TabPostVC} options={{
         tabBarIcon: ({focused}) => {
          const image = focused
          ? require('../Screens/TabBar/TabIcons/home_1.png')
          : require('../Screens/TabBar/TabIcons/home.png')
          return (
              <Image
              resizeMode='contain'
                  source={image}
                  style={{height:60, width:60,marginBottom:30}}
              />
          )
      }}}/>
      <Tab.Screen name="Notifications" component={TabNotifications} options={{
         tabBarIcon: ({focused}) => {
          const image = focused
          ? require('../Screens/TabBar/TabIcons/notification_1.png')
          : require('../Screens/TabBar/TabIcons/notification.png')
          return (
              <Image
              resizeMode='contain'
                  source={image}
                  style={{height:25, width:25}}
              />
          )
      }}}/>
      <Tab.Screen name="BrowseTasks" component={TabBrowseTasks} options={{
         tabBarIcon: ({focused}) => {
          const image = focused
          ? require('../Screens/TabBar/TabIcons/selected_available.png')
          : require('../Screens/TabBar/TabIcons/unselected_available.png')
          return (
              <Image
              resizeMode='contain'
                  source={image}
                  style={{height:25, width:25}}
              />
          )
      }}}/>
    </Tab.Navigator>
  );
}

export default Tabber;