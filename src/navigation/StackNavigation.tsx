import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import StoryView from '../components/StoryView';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Bottom"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={BottomNavigation} />
        {/* <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} /> */}
        <Stack.Screen name="Story" component={StoryView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
