/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import ProfileSettings from './ProfleSettings';

const ProfileHeader = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <View style={{paddingHorizontal: 15, paddingTop: 10, height: 55}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={{fontSize: 24, fontWeight: '500', color: 'black'}}>
            avibhavchoudhary
          </Text>
          <AntDesign name="down" style={{fontSize: 14, marginLeft: 5}} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={{marginRight: 15}}>
            <Feather name="plus-square" style={{fontSize: 24}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleModal}>
            <MaterialIcons name="menu" style={{fontSize: 24}} />
          </TouchableOpacity>
        </View>
      </View>
      <ProfileSettings showModal={showModal} toggleModal={toggleModal} />
    </View>
  );
};

export default ProfileHeader;
