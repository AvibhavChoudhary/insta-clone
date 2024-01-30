/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const StoryView = ({route}) => {
  const selectedItem = route.params.item;
  const navigation = useNavigation();
  const currentTime = new Date();
  const currentHr = currentTime.getHours();
  const storyTime = currentHr - selectedItem.story.time;
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    let timeout = setTimeout(() => {
      navigation.goBack();
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });
  return (
    <View style={styles.mainConatiner}>
      <View style={styles.storyProgress}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}
        />
      </View>
      <View style={styles.avatarContainer}>
        <View style={styles.storyAvatar}>
          <Image
            style={styles.storyAvatarImage}
            source={selectedItem.profile}
          />
          <Text style={styles.avatarText}>{selectedItem.name}</Text>
          <Text style={styles.storyTimer}>{storyTime}hr</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="cross" style={styles.crossButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.storyImageContainer}>
        <Image source={selectedItem.story.image} style={styles.storyImage} />
        <View style={styles.replyConatiner}>
          <TextInput
            style={styles.replyInput}
            placeholder="Message"
            placeholderTextColor={'white'}
          />
          <TouchableOpacity>
            <Feather name="send" style={styles.replyButton} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StoryView;

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: 'black',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyProgress: {
    height: 3,
    width: '95%',
    borderWidth: 1,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 18,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 12,
    left: 0,
  },
  storyAvatar: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingLeft: 12,
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  storyAvatarImage: {height: 40, width: 40, borderRadius: 20, marginRight: 10},
  avatarText: {fontSize: 18, fontWeight: '700', color: 'white'},
  storyTimer: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    color: 'white',
  },
  crossButton: {color: 'white', fontSize: 28, marginRight: 10, marginTop: 10},
  storyImageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  storyImage: {
    height: screenHeight - 120,
    width: screenWidth,
    flex: 1,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    objectFit: 'contain',
  },
  replyConatiner: {
    display: 'flex',
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 0.1,
  },
  replyInput: {
    borderWidth: 1,
    borderColor: 'white',
    height: '80%',
    paddingHorizontal: 15,
    color: 'white',
    borderRadius: 30,
    marginHorizontal: 10,
    flex: 0.8,
  },
  replyButton: {marginLeft: 15, color: 'white', fontSize: 22},
});
