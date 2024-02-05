import {
  HStack,
  Input,
  InputField,
  InputSlot,
  InputIcon,
  SearchIcon,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';
import {Pressable} from 'react-native';

const ChatSearch = () => {
  return (
    <HStack
      alignItems="center"
      paddingHorizontal="$2"
      justifyContent="space-between">
      <Input
        variant="outline"
        size="md"
        flex={1}
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}>
        <InputSlot pl="$3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField placeholder="Search" />
      </Input>
      <Pressable flex={0.18} flexDirection="row" justifyContent="center">
        <Text color="$blue800">Filter</Text>
      </Pressable>
    </HStack>
  );
};

export default ChatSearch;
