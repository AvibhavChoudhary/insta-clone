/* eslint-disable react-native/no-inline-styles */
import {
  VStack,
  Input,
  InputField,
  Pressable,
  Text,
  Box,
  HStack,
  Image,
} from '@gluestack-ui/themed';
import React from 'react';
import {ADD_POST_OPTIONS} from '../utils/helpers';
import {UploadPostProps} from '../utils/types';
import Feather from 'react-native-vector-icons/Feather';

const UploadPost = ({imageUri, toggleButtons}: UploadPostProps) => {
  return (
    <VStack flex={1} paddingVertical="$2" alignItems="center">
      <Image
        style={{height: 300, width: 300, borderRadius: 10}}
        source={{
          uri: imageUri ? imageUri : require('../../assets/self-avatar.jpg'),
        }}
        alt="Uploaded image"
      />

      <Input
        variant="underlined"
        mt="$2"
        size="lg"
        paddingHorizontal="$2"
        w="$full"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}>
        <InputField placeholder="Write a caption" />
      </Input>
      <Box mt="$2">
        {ADD_POST_OPTIONS.map(({name, iconName}) => {
          return (
            <HStack
              key={name}
              w="$full"
              alignItems="center"
              justifyContent="space-between"
              paddingVertical="$1">
              <HStack
                alignItems="center"
                paddingHorizontal="$2"
                paddingVertical="$1">
                {iconName()}
                <Text size="lg" fontWeight="$semibold" pl="$2">
                  {name}
                </Text>
              </HStack>
              <Feather
                name="chevron-right"
                style={{fontSize: 22, color: 'gray', marginRight: 10}}
              />
            </HStack>
          );
        })}
      </Box>
      <Box position="absolute" bottom={0} w="$full">
        <Pressable
          onPress={toggleButtons}
          p="$3"
          m="$2"
          flex={1}
          borderRadius="$md"
          alignItems="center"
          bg="$primary500"
          $hover-bg="$primary400">
          <Text color="white">Share</Text>
        </Pressable>
      </Box>
    </VStack>
  );
};

export default UploadPost;
