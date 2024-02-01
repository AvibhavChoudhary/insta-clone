import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {UserData, UserDataType} from '../../utils/userData';
import Post from './Post';
import Stories from '../story/Stories';
import {shuffleArray} from '../../utils/helpers';

const PostList = () => {
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
    <>
      <Stories storiesData={postItems} />
      <FlatList
        data={postItems}
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
