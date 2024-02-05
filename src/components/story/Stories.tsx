/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {UserData, UserDataType} from '../../utils/userData';

const Stories = ({storiesData}: {storiesData: UserDataType[]}) => {
  const navigation = useNavigation();
  const postData: UserDataType[] = [...UserData];
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        key={postData[0].id}

        // onPress={() => navigation.navigate('Story', {item})}
      >
        <View
          style={{
            flexDirection: 'column',
            paddingHorizontal: 8,
            height: 100,
          }}>
          {postData[0].id === 1 ? (
            <View style={styles.iconContainer}>
              <Entypo name="circle-with-plus" style={styles.plusIcon} />
            </View>
          ) : null}
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={postData[0].story[0].image} />
          </View>
          <Text style={styles.userName}>{storiesData[0].username}</Text>
        </View>
      </TouchableOpacity>
      {storiesData.slice(1).map((item: UserDataType, index) => {
        if (!item.story.length) {
          return;
        }
        return !(item.id === 1) ? (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate('Story', {
                stories: storiesData,
                userIndex: index + 1,
              })
            }>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                height: 100,
              }}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.story[0].image} />
              </View>
              <Text style={styles.userName}>{item.username}</Text>
            </View>
          </TouchableOpacity>
        ) : null;
      })}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', paddingTop: 8, backgroundColor: 'white'},
  imageContainer: {
    width: 68,
    height: 68,
    backgroundColor: 'white',
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: '#c13584',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  userName: {
    textAlign: 'center',
    fontSize: 10,
    // opacity: item.id == 0 ? 1 : 0.5,
  },
  plusIcon: {
    fontSize: 20,
    color: '#405de6',
    borderRadius: 100,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 35,
    right: 10,
    zIndex: 1,
    backgroundColor: 'white',
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
