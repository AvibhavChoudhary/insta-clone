/* eslint-disable react-native/no-inline-styles */
import {Button, ButtonText, useToast, VStack} from '@gluestack-ui/themed';
import React, {useState, useEffect, useContext} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UploadPost from '../components/post/UploadPost';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PostType} from '../utils/types';
import {useNavigation} from '@react-navigation/native';
import PostContext from '../context/PostContext';
import {showToastMessage} from '../utils/helpers';

const AddPost = ({route}) => {
  const postData: PostType | null = route?.params?.postData ?? null;
  const postId: number = route?.params?.postId;
  const {state, addPost, updatePost} = useContext(PostContext);

  const [showAddButtons, setShowAddButton] = useState(
    postData?.image ? false : true,
  );
  const [imageUri, setImageUri] = useState<string>(postData?.image ?? '');
  const toast = useToast();
  const navigation = useNavigation();

  const isEdit = postData ? true : false;

  useEffect(() => {
    if (postData?.image) {
      setShowAddButton(false);
      setImageUri(postData?.image);
    }
  }, [postData?.image]);

  const closeImagePreview = () => {
    setShowAddButton(true);
    navigation.setParams({postData: undefined, postId: undefined});
  };
  const openImagePreview = () => {
    setShowAddButton(false);
  };

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.7,
    });
    if (result.assets[0].uri) {
      setImageUri(result.assets[0].uri);
      openImagePreview();
    }
    if (result.errorCode) {
      showToastMessage({
        toastRef: toast,
        title: 'Attention!',
        description: result.errorCode,
        variant: 'accent',
        action: 'error',
        placement: 'top',
      });
    }
  };
  const openGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.7,
    });
    if (result.assets[0].uri) {
      setImageUri(result.assets[0].uri);
      openImagePreview();
    }
    if (result.errorCode) {
      showToastMessage({
        toastRef: toast,
        title: 'Attention!',
        description: result.errorCode,
        variant: 'accent',
        action: 'error',
        placement: 'top',
      });
    }
  };

  const onShareConfirm = ({image, caption}) => {
    closeImagePreview();
    if (!isEdit) {
      addPost({
        id: 100 + state.posts.length,
        name: 'Avi Choudhary',
        username: 'avichoudhary',
        profile: require('../../assets/self-avatar.jpg'),
        story: [],
        post: [
          {
            time: '07:00 AM',
            date: '12/05/2023',
            image: image,
            caption: caption,
            like: 0,
          },
        ],
      });
    } else {
      updatePost(postId, {
        ...postData,
        image: image,
        caption: caption,
      });
    }
    navigation.navigate('Home');
    showToastMessage({
      toastRef: toast,
      title: 'Success',
      description: `Your post has been  ${
        isEdit ? 'updated' : 'added'
      } successfully`,
      variant: 'accent',
      action: 'success',
      placement: 'top',
    });
  };

  return (
    <VStack flex={1} alignItems="center" justifyContent="center">
      {showAddButtons ? (
        <>
          <Button
            w="$56"
            marginVertical="$4"
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={openCamera}>
            <ButtonText>Open Camera </ButtonText>
            <Feather name="camera" style={{fontSize: 20, color: 'white'}} />
          </Button>
          <Button
            w="$56"
            size="md"
            marginVertical="$4"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={openGallery}>
            <ButtonText>Open Gallery </ButtonText>
            <FontAwesome name="photo" style={{fontSize: 20, color: 'white'}} />
          </Button>
        </>
      ) : (
        <UploadPost
          imageUri={imageUri}
          toggleButtons={closeImagePreview}
          caption={postData?.caption}
          isEdit={isEdit}
          onShare={onShareConfirm}
        />
      )}
    </VStack>
  );
};

export default AddPost;
