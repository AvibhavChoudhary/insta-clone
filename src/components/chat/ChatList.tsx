import {VStack, FlatList, Text} from '@gluestack-ui/themed';
import React from 'react';
import {chatItemsData} from '../../utils/userData';
import ChatItem from './ChatItem';
import ChatSearch from './ChatSearch';

const ChatList = () => {
  return (
    <VStack flex={1}>
      <ChatSearch />
      <FlatList
        style={{
          flex: 1,
        }}
        data={chatItemsData}
        renderItem={({item}) => {
          return (
            <>
              <ChatItem chatData={item} />
            </>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </VStack>
  );
};

export default ChatList;
