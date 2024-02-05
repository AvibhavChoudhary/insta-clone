import {
  Box,
  HStack,
  ChevronLeftIcon,
  Icon,
  Heading,
  Pressable,
} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useRef, useEffect} from 'react';
import {FlatList} from 'react-native';
import PostContext from '../../context/PostContext';
import {UserDataType} from '../../utils/userData';
import Post from '../post/Post';

const ProfilePostList = ({route}) => {
  const postId: number = route.params.postId;
  const postIndex: number = route.params.postIndex;
  const {state} = useContext(PostContext);
  const postData: UserDataType[] = [...state.posts];
  const navigation = useNavigation();
  const flatListRef = useRef(null);

  useEffect(() => {
    if (postIndex) {
      flatListRef.current.scrollToIndex({
        index: postIndex,
        animated: true,
      });
    }
  }, [postIndex]);

  return (
    <Box bg="$white">
      <HStack alignItems="center">
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon as={ChevronLeftIcon} m="$2" w="$8" h="$8" />
        </Pressable>
        <Heading>Posts</Heading>
      </HStack>
      <FlatList
        ref={flatListRef}
        data={postData}
        renderItem={({item}) => {
          return (
            <>
              <Post postData={item} />
            </>
          );
        }}
        keyExtractor={item => item.id.toString()}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 700));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
      />
    </Box>
  );
};

export default ProfilePostList;
