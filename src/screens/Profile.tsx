import {Box} from '@gluestack-ui/themed';
import React from 'react';
import ProfileDetails from '../components/profile/ProfileDetails';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfilePost from '../components/profile/ProfilePosts';

const Profile = () => {
  return (
    <Box flex={1} bg="$white">
      <ProfileHeader />
      <ProfileDetails />
      <ProfilePost />
    </Box>
  );
};

export default Profile;
