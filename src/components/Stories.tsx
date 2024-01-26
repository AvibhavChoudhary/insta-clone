/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {UserData} from '../utils/userData';
import {useNavigation} from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {UserData.map(item => {
        console.log(item);
        return (
          <View style={{marginLeft: 10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Story', {item})}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.story.image} />
              </View>
            </TouchableOpacity>
            <Text style={styles.userName}>{item.username}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', paddingTop: 8, backgroundColor: 'white'},
  imageContainer: {
    borderWidth: 3,
    borderRadius: 40,
    padding: 2,
    borderColor: '#FF20B1',
  },
  image: {height: 70, width: 70, borderRadius: 35},
  userName: {textAlign: 'center', color: 'black'},
});
