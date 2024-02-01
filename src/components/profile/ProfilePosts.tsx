/* eslint-disable react-native/no-inline-styles */
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {UserData, typeData} from '../../utils/userData';
import Entypo from 'react-native-vector-icons/Entypo';
import {ProfileTabs} from '../../navigation/ProfileTab';

const ProfilePost = () => {
  const highlightedStories = () => {
    let numberOfHighlights = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return numberOfHighlights.map((item, index) => {
      return (
        <View key={index}>
          {index === 0 ? (
            <View style={styles.addHighlight}>
              <Entypo name="plus" style={{fontSize: 40, color: 'black'}} />
            </View>
          ) : (
            <View style={styles.highlightStyle}></View>
          )}
        </View>
      );
    });
  };

  return (
    <View style={{marginTop: 20, height: '100%'}}>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.highlightScroll}>
          {highlightedStories()}
        </ScrollView>
      </View>

      <View style={{backgroundColor: 'green', width: '100%', height: '100%'}}>
        <ProfileTabs />
      </View>
    </View>
  );
};

export default ProfilePost;

const styles = StyleSheet.create({
  highlightText: {
    padding: 10,
    letterSpacing: 1,
    fontSize: 14,
  },
  highlightScroll: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  addHighlight: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlightStyle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'black',
    opacity: 0.1,
    marginHorizontal: 5,
  },
});
