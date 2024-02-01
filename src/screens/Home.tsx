import {Box} from '@gluestack-ui/themed';
import React from 'react';
import {StatusBar} from 'react-native';
import Header from '../components/Header';
import PostList from '../components/post/PostList';

const Home = () => {
  return (
    <Box bg="$white">
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />

      <Header />
      <PostList />
    </Box>
  );
};

export default Home;
