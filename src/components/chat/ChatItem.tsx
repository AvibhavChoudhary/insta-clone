import {
  HStack,
  Avatar,
  AvatarImage,
  Text,
  VStack,
  Badge,
} from '@gluestack-ui/themed';
import React from 'react';
import {ChatItemType} from '../../utils/types';
import Feather from 'react-native-vector-icons/Feather';

type ChatPorps = {
  chatData: ChatItemType;
};

const ChatItem = ({chatData}: ChatPorps) => {
  return (
    <HStack space="md" p="$3" alignItems="center" paddingHorizontal="$2">
      <Avatar size="lg">
        <AvatarImage source={chatData.avatar} alt="avatar" />
      </Avatar>
      <HStack flex={1} alignItems="center" justifyContent="space-between">
        <VStack>
          <Text size="md" fontWeight={chatData.unread ? '$bold' : '$semibold'}>
            {chatData.name}
          </Text>
          <HStack>
            <Text size="sm" fontWeight={chatData.unread ? '$bold' : '$noraml'}>
              {chatData.message}
            </Text>
            <Text size="xs" ml="$2">
              {chatData.time}h
            </Text>
          </HStack>
        </VStack>
        {chatData.unread && (
          <VStack justifyContent="center" mr="$3">
            <Badge h={15} w={10} bg="$blue500" borderRadius="$full" />
          </VStack>
        )}
      </HStack>
      <HStack mr="$2">
        <Feather name="camera" style={{fontSize: 24}} />
      </HStack>
    </HStack>
  );
};

export default ChatItem;
