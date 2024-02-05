/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useContext} from 'react';
import {FlatList, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Box, Text} from '@gluestack-ui/themed';
import PostContext from '../context/PostContext';
import {UserDataType} from '../utils/userData';
export const ProfileTabs = () => {
  const Tab = createMaterialTopTabNavigator();
  const {state} = useContext(PostContext);
  const postData: UserDataType[] = [...state.posts];

  const renderItem = item => {
    return (
      <Box>
        <Image
          style={{height: 130.9, width: 130.9}}
          source={
            typeof item.item.post[0].image === 'string'
              ? {uri: item.item.post[0].image}
              : item.item.post[0].image
          }
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
        paddingVertical="$2">
        <FlatList
          data={postData}
          style={{
            height: '100%',
          }}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
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
