import {
  Box,
  Fab,
  FabIcon,
  Spinner,
  AddIcon,
  Center,
} from '@gluestack-ui/themed';
import React, {useState, useEffect, useContext} from 'react';
import {FlatList, StatusBar} from 'react-native';
import Header from '../components/common/Header';
import Post from '../components/post/Post';
import Stories from '../components/story/Stories';
import PostContext from '../context/PostContext';
import {shuffleArray} from '../utils/helpers';
import {UserDataType} from '../utils/userData';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const Home = () => {
  const {state} = useContext(PostContext);
  const postData: UserDataType[] = [...state.posts.slice(0, 10)];
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(0);
  const [postItems, setPostItems] = useState<UserDataType[]>(postData);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      setPostItems(postData);
    }, [state]),
  );
  useEffect(() => {
    const newPostArray: UserDataType[] = shuffleArray(postData);
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
  const onEndReachedHandle = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setPostItems([
        ...postItems,
        ...state.posts.slice(postItems.length + 1, postItems.length + 5),
      ]);
      setLoading(false);
      clearTimeout(timer);
    }, 500);
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
        onEndReached={onEndReachedHandle}
        onEndReachedThreshold={2}
      />
      {loading && (
        <Center flex={1} mb="$4" position="absolute" top="90%" left="45%">
          <Spinner size="large" />
        </Center>
      )}
      <Fab
        size="md"
        placement="bottom right"
        onPress={() => {
          navigation.navigate('AddPost');
        }}>
        <FabIcon as={AddIcon} />
      </Fab>
    </Box>
  );
};

export default Home;
