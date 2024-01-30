import React from 'react';
import {View, ScrollView, StatusBar, StyleSheet} from 'react-native';
import Header from '../components/Header';
import PostList from '../components/PostList';

const Home = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      {/* <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.listStyle}> */}
      <Header />

      <PostList />
      {/* </ScrollView> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  listStyle: {flex: 1, backgroundColor: 'white'},
});
