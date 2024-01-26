import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Header from '../components/Header';

const Home = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <Header />
    </View>
  );
};

export default Home;
