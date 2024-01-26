import React from 'react';
import {View, ScrollView, StatusBar, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';
import Stories from '../components/Stories';

const Home = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.scrollViewContainer}>
        <Header />
        <Stories />
        <Post />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollViewContainer: {flex: 1, backgroundColor: 'white'},
});
