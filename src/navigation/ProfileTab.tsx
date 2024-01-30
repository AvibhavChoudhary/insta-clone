/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {UserData} from '../utils/userData';
export const ProfileTabs = () => {
  const Tab = createMaterialTopTabNavigator();

  const renderItem = item => {
    return (
      <View>
        <Image
          style={{height: 130.9, width: 130.9}}
          source={item.item.post.image}
        />
      </View>
    );
  };
  const Posts = () => {
    return (
      <View style={styles.tabContainer}>
        <FlatList
          data={UserData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  const Video = () => {
    return (
      <View style={styles.tabContainer}>
        <Text>Hii</Text>
      </View>
    );
  };
  const Tags = () => {
    return (
      <View style={{}}>
        <Text>Hii</Text>
      </View>
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

const styles = StyleSheet.create({
  tabContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
});
