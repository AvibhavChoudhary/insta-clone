/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import StackNavigation from './src/navigation/StackNavigation';
import {SafeAreaView} from 'react-native';
import PostProvider from './src/context/PostProvider';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Login: undefined;
};

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <PostProvider>
        <SafeAreaView style={{flex: 1}}>
          <StackNavigation />
        </SafeAreaView>
      </PostProvider>
    </GluestackUIProvider>
  );
}

export default App;
