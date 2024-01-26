import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
