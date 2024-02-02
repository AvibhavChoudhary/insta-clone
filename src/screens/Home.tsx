import {Box} from '@gluestack-ui/themed';
import React, {useState, useEffect} from 'react';
import {FlatList, StatusBar} from 'react-native';
import Header from '../components/Header';
import Post from '../components/post/Post';
import Stories from '../components/story/Stories';
import {shuffleArray} from '../utils/helpers';
import {UserData, UserDataType} from '../utils/userData';

const Home = () => {
  const postData: UserDataType[] = [...UserData];
  const [refreshing, setRefreshing] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(0);
  const [postItems, setPostItems] = useState<UserDataType[]>(
    postData.slice(0, 20),
  );

  useEffect(() => {
    const newPostArray: UserDataType[] = shuffleArray(postItems);
    setPostItems(newPostArray);
  }, [displayedItems]);

  const handleRefresh = () => {
    setRefreshing(true);
    const timer = setTimeout(() => {
      setDisplayedItems(prevCount => prevCount + 1);
      setRefreshing(false);
      clearTimeout(timer);
    }, 1500);
  };
  return (
    <Box bg="$white">
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />

      <FlatList
        data={postItems}
        renderItem={({item}) => {
          return (
            <>
              <Post postData={item} />
            </>
          );
        }}
        ListHeaderComponent={
          <>
            <Header />
            <Stories storiesData={postItems} />
          </>
        }
        keyExtractor={item => item.id.toString()}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </Box>
  );
};

export default Home;
