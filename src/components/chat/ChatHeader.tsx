/* eslint-disable react-native/no-inline-styles */
import {
  HStack,
  Pressable,
  ArrowLeftIcon,
  Icon,
  Text,
  ChevronDownIcon,
} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ChatHeader = () => {
  const navigation = useNavigation();
  return (
    <HStack alignItems="center">
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon as={ArrowLeftIcon} m="$2" w="$8" h="$8" fontWeight="$normal" />
      </Pressable>
      <HStack flex={1} ml="$3" alignItems="center">
        <Text size="lg" fontWeight="$semibold" color="$black">
          avichoudhary
        </Text>
        <Icon as={ChevronDownIcon} m="$2" w="$5" h="$5" />
      </HStack>
      <HStack alignItems="center" justifyContent="space-evenly" flex={0.8}>
        <Feather name="more-horizontal" style={{fontSize: 24}} />
        <MaterialIcons name="timeline" style={{fontSize: 24}} />
        <FontAwesome name="edit" style={{fontSize: 24}} />
      </HStack>
    </HStack>
  );
};

export default ChatHeader;
