/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const ProfileDetails = () => {
  return (
    <View style={{paddingHorizontal: 15}}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileAvatar}
          source={require('../../assets/self-avatar.jpg')}
        />

        <View style={styles.followerConatiner}>
          <Text style={styles.followerNumber}>4</Text>
          <Text style={styles.followerText}>Posts</Text>
        </View>
        <View style={styles.followerConatiner}>
          <Text style={styles.followerNumber}>1.2 M</Text>
          <Text style={styles.followerText}>Followers</Text>
        </View>
        <View style={styles.followerConatiner}>
          <Text style={styles.followerNumber}>1</Text>
          <Text style={styles.followerText}>Following</Text>
        </View>
      </View>
      <Text style={styles.profileName}>Avi Choudhary</Text>
      <Text style={{color: 'black'}}>React Native</Text>
      <Text style={{color: 'black'}}>Instagram Clone</Text>
      <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
        See Translation
      </Text>
      <View style={styles.actionButtonContainer}>
        <TouchableOpacity>
          <Text style={styles.buttonStyles}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonStyles}>Share Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileAvatar: {height: 80, width: 80, borderRadius: 50},
  followerConatiner: {width: 75, alignItems: 'center'},
  followerNumber: {fontSize: 20, fontWeight: '600', color: 'black'},
  followerText: {fontSize: 16, color: 'black'},
  profileName: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    marginTop: 10,
  },
  actionButtonContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  buttonStyles: {
    width: 160,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    textAlign: 'center',
    color: 'black',
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
});
