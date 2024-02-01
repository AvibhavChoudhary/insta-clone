/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionic from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Reels from '../screens/Reels';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 50,
        },
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
            size = focused ? size + 8 : size + 2;
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Reels') {
            iconName = focused
              ? 'caret-forward-circle'
              : 'caret-forward-circle-outline';
          } else if (route.name === 'Activity') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-outline';
          }
          return <Ionic name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
