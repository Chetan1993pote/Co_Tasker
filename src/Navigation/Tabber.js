
import React from 'react';
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
    // tabBarOptions={{
    //   showLabel:false
    // }}
    
    >
      <Tab.Screen name="MyTasks" component={TabMyTasksVC} />
      <Tab.Screen name="Messages" component={TabMessagesVC} />
      <Tab.Screen name="Notifications" component={TabNotifications} />
      <Tab.Screen name="BrowseTasks" component={TabBrowseTasks} />
      <Tab.Screen name="PostTasks" component={TabPostVC} />

    </Tab.Navigator>
  );
}

export default Tabber;