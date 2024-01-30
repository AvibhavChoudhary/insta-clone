import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {UserData} from '../utils/userData';
import Post from '../components/Post';
import Stories from './Stories';

const PostList = () => {
  const postData = [...UserData];
  const [refreshing, setRefreshing] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(10);

  const initialPost = postData.slice(0, displayedItems);

  const handleRefresh = () => {
    console.log('refreshing...');
    setRefreshing(true);
    const timer = setTimeout(() => {
      //   setDisplayedItems(prevCount => prevCount + 10);
      console.log('hello');
      setRefreshing(false);
      clearTimeout(timer);
    }, 1500);
  };
  return (
    <>
      <Stories storiesData={initialPost} />
      <FlatList
        data={initialPost}
        renderItem={({item}) => {
          return (
            <>
              <Post postData={item} />
            </>
          );
        }}
        keyExtractor={item => item.id}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </>
  );
};

export default PostList;
