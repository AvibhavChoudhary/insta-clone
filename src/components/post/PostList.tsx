import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {UserData, UserDataType} from '../../utils/userData';
import Post from './Post';
import Stories from '../story/Stories';

const PostList = () => {
  const postData: UserDataType[] = [...UserData];
  const [refreshing, setRefreshing] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(10);

  const initialPost: UserDataType[] = postData.slice(0, displayedItems);

  const handleRefresh = () => {
    setRefreshing(true);
    const timer = setTimeout(() => {
      //   setDisplayedItems(prevCount => prevCount + 10);
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
