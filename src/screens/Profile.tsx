import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProfileDetails from '../components/ProfileDetails';
import ProfileHeader from '../components/ProfileHeader';
import ProfilePost from '../components/ProfilePosts';

const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ProfileHeader />
      <ProfileDetails />
      <ProfilePost />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
