/* eslint-disable react-native/no-inline-styles */
import {Image, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {UserDataType} from '../../utils/userData';
import {Box, Text} from '@gluestack-ui/themed';
import BottomSheet from './BottomSheet';

const screenWidth = Dimensions.get('window').width;

const Post = ({postData}: {postData: UserDataType}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <Box mt="$1">
      <Box key={postData.id} marginVertical="$2.5">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          paddingHorizontal="$2.5"
          mb="$2">
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start">
            <Image style={styles.profileAvatar} source={postData.profile} />
            <Text
              pl="$2.5"
              color="$black"
              fontWeight="$semibold"
              fontSize="$md">
              {postData.name}
            </Text>
          </Box>
          <TouchableOpacity onPress={toggleModal}>
            <Feather name="more-vertical" style={styles.iconButton} />
          </TouchableOpacity>
        </Box>
        <Box>
          <Image
            style={styles.postImage}
            source={
              typeof postData.post[0].image === 'string'
                ? {uri: postData.post[0].image}
                : postData.post[0].image
            }
            alt="post"
          />
        </Box>
        <Box
          flexDirection="row"
          alignItems="center"
          mt="$2"
          w="$2/6"
          justifyContent="space-around"
          h="$8">
          <TouchableOpacity>
            <AntDesign name="hearto" style={styles.iconButton} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Octicons name="comment" style={styles.iconButton} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" style={styles.iconButton} />
          </TouchableOpacity>
        </Box>
        <Text
          ml="$3"
          mt="$1"
          fontSize="$md"
          color="$black"
          fontWeight="$semibold">
          {postData.post[0].like} likes
        </Text>
        <Box flexDirection="row" paddingHorizontal="$3" alignItems="center">
          <Text fontWeight="$semibold" color="$textDark800">
            {postData.username}{' '}
          </Text>
          <Text color="$textDark800">{postData.post[0].caption}</Text>
        </Box>
      </Box>

      <BottomSheet
        showModal={showModal}
        toggleModal={toggleModal}
        postData={postData}
      />
    </Box>
  );
};

export default Post;

const styles = StyleSheet.create({
  profileAvatar: {height: 30, width: 30, borderRadius: 15},
  postImage: {
    height: 400,
    width: screenWidth,
    objectFit: 'contain',
  },
  iconButton: {fontSize: 24},
});
