/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = () => {
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
        <TouchableOpacity>
          <View style={{position: 'relative'}}>
            <Feather name="send" style={{fontSize: 24}} />
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
