/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  ButtonText,
  useToast,
  VStack,
  ToastTitle,
  Toast,
  ToastDescription,
} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UploadPost from '../components/UploadPost';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const AddPost = () => {
  const [showAddButtons, setShowAddButton] = useState(true);
  const [imageUri, setImageUri] = useState<string>('');
  const toast = useToast();

  const toggleImagePreview = () => {
    setShowAddButton(prev => !prev);
  };

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.7,
    });
    if (result.assets[0].uri) {
      setImageUri(result.assets[0].uri);
      toggleImagePreview();
    }
    if (result.errorCode) {
      toast.show({
        placement: 'top',
        render: ({id}) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} variant="accent" action="error">
              <VStack space="xs">
                <ToastTitle>Attention!</ToastTitle>
                <ToastDescription>{result.errorCode}</ToastDescription>
              </VStack>
            </Toast>
          );
        },
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
      toggleImagePreview();
    }
    if (result.errorCode) {
      toast.show({
        placement: 'top',
        render: ({id}) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} variant="accent" action="error">
              <VStack space="xs">
                <ToastTitle>Attention!</ToastTitle>
                <ToastDescription>{result.errorCode}</ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
    }
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
        <UploadPost imageUri={imageUri} toggleButtons={toggleImagePreview} />
      )}
    </VStack>
  );
};

export default AddPost;
