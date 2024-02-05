/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logoImage}
          source={require('../../assets/images/Instagram-logo.png')}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginRight: 15}}>
          <FontAwesome name="heart-o" style={{fontSize: 24}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <View style={{position: 'relative'}}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              style={{fontSize: 24}}
            />
            <View style={styles.notificationContainer}>
              <Text style={styles.notificationText}>5</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: 'white',
  },
  logoImage: {height: 28, width: 110},
  notificationText: {
    paddingHorizontal: 5,
    fontSize: 10,
    color: 'white',
  },
  notificationContainer: {
    position: 'absolute',
    bottom: 12,
    left: 13,
    borderRadius: 50,
    width: 16,
    height: 16,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
