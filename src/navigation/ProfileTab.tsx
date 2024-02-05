/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useContext} from 'react';
import {FlatList, Image, Pressable} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Box, Text} from '@gluestack-ui/themed';
import PostContext from '../context/PostContext';
import {UserDataType} from '../utils/userData';
import {useNavigation} from '@react-navigation/native';
export const ProfileTabs = () => {
  const Tab = createMaterialTopTabNavigator();
  const {state} = useContext(PostContext);
  const postData: UserDataType[] = [...state.posts];
  const navigation = useNavigation();

  const renderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('ProfilePostList', {
            postId: item.id,
            postIndex: index,
          });
        }}>
        <Image
          style={{height: 130.9, width: 130.9}}
          source={
            typeof item.post.images[0] === 'string'
              ? {uri: item.post.images[0]}
              : item.post.images[0]
          }
        />
      </Pressable>
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
