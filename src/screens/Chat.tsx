import {Box, VStack} from '@gluestack-ui/themed';
import React from 'react';
import ChatHeader from '../components/chat/ChatHeader';
import ChatList from '../components/chat/ChatList';

const Chat = () => {
  return (
    <VStack flex={1}>
      <ChatHeader />
      <ChatList />
    </VStack>
  );
};

export default Chat;
