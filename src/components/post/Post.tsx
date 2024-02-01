/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {UserDataType} from '../../utils/userData';

const screenWidth = Dimensions.get('window').width;

const Post = ({postData}: {postData: UserDataType}) => {
  return (
    <View style={{marginTop: 2}}>
      <View key={postData.id} style={{marginTop: 10, marginBottom: 10}}>
        <View style={styles.profileContainer}>
          <Image style={styles.profileAvatar} source={postData.profile} />
          <Text style={styles.profileUsername}>{postData.name}</Text>
        </View>
        <View>
          <Image style={styles.postImage} source={postData.post.image} />
        </View>
        <View style={styles.postActionButtons}>
          <TouchableOpacity>
            <AntDesign name="hearto" style={styles.iconButton} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Octicons name="comment" style={styles.iconButton} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" style={styles.iconButton} />
          </TouchableOpacity>
        </View>
        <Text style={styles.postLikes}>{postData.post.like} likes</Text>
        <View style={styles.captionContainer}>
          <Text style={styles.captionText}>{postData.username} </Text>
          <Text style={{color: 'black'}}>{postData.post.caption}</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  profileAvatar: {height: 30, width: 30, borderRadius: 15},
  profileUsername: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  postImage: {
    height: 400,
    width: screenWidth,
    objectFit: 'contain',
  },
  postActionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    height: 30,
    width: '38%',
    justifyContent: 'space-around',
  },
  postLikes: {
    marginLeft: 13,
    marginTop: 4,
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  captionContainer: {
    flexDirection: 'row',
    paddingHorizontal: 13,
    alignItems: 'center',
  },
  captionText: {color: 'black', fontSize: 16, fontWeight: '500'},
  iconButton: {fontSize: 24},
});
