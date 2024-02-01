/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {FlatList, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {UserData} from '../utils/userData';
import {Box, Text} from '@gluestack-ui/themed';
export const ProfileTabs = () => {
  const Tab = createMaterialTopTabNavigator();

  const renderItem = item => {
    return (
      <Box>
        <Image
          style={{height: 130.9, width: 130.9}}
          source={item.item.post.image}
        />
      </Box>
    );
  };
  const Posts = () => {
    return (
      <Box
        flex={1}
        bgColor="$white"
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="space-between"
        paddingVertical="$2.5">
        <FlatList
          data={UserData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
        />
      </Box>
    );
  };
  const Video = () => {
    return (
      <Box
        flex={1}
        bgColor="$white"
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="space-between"
        paddingVertical="$2.5">
        <Text>Hii</Text>
      </Box>
    );
  };
  const Tags = () => {
    return (
      <Box
        flex={1}
        bgColor="$white"
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="space-between"
        paddingVertical="$2.5">
        <Text>Hii</Text>
      </Box>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: 'black',
          height: 1.5,
        },
        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'Posts') {
            iconName = focused ? 'grid-on' : 'grid-on';
            color = focused ? 'black' : 'gray';
          } else if (route.name === 'Video') {
            iconName = focused ? 'video-library' : 'video-library';
            color = focused ? 'black' : 'gray';
          } else if (route.name === 'Tags') {
            iconName = focused ? 'person' : 'person';
            color = focused ? 'black' : 'gray';
          }

          return <MaterialIcons name={iconName} color={color} size={22} />;
        },
      })}>
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Video" component={Video} />
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  );
};
