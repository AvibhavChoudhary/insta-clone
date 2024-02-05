/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SheetItemType, ToastProps} from './types';
import {UserDataType} from './userData';
import {
  Toast,
  VStack,
  ToastTitle,
  ToastDescription,
} from '@gluestack-ui/themed';

export const shuffleArray = (array: UserDataType[]) => {
  let currentIndex = array.length;
  let randomIndex, tempValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap elements
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }

  return array;
};

export const showToastMessage = ({
  toastRef,
  title,
  description,
  variant = 'accent',
  action = 'error',
  placement = 'top',
}: ToastProps) => {
  toastRef.show({
    placement: placement,
    render: ({id}) => {
      const toastId = 'toast-' + id;
      return (
        <Toast nativeID={toastId} variant={variant} action={action}>
          <VStack space="xs">
            <ToastTitle>{title}</ToastTitle>
            <ToastDescription>{description}</ToastDescription>
          </VStack>
        </Toast>
      );
    },
  });
};

export const SHEET_LIST_ITEMS: SheetItemType[] = [
  {
    name: 'Edit',
    iconName: () => <Feather name="edit" style={{fontSize: 20}} />,
  },

  {
    name: 'Add to favorites',
    iconName: () => <AntDesign name="staro" style={{fontSize: 20}} />,
  },
  {
    name: 'Unfollow',
    iconName: () => (
      <SimpleLineIcons name="user-unfollow" style={{fontSize: 20}} />
    ),
  },
  {
    name: 'Create a cutout sticker',
    iconName: () => <Fontisto name="scissors" style={{fontSize: 20}} />,
  },
  {
    name: 'Hide',
    iconName: () => <Feather name="eye-off" style={{fontSize: 20}} />,
  },
  {
    name: 'Delete',
    iconName: () => (
      <AntDesign name="delete" style={{fontSize: 20, color: 'red'}} />
    ),
  },
  {
    name: 'Block',
    iconName: () => <Entypo name="block" style={{fontSize: 20}} />,
  },
  {
    name: 'Report',
    iconName: () => <MaterialIcons name="report" style={{fontSize: 20}} />,
  },
  {
    name: 'About this account',
    iconName: () => (
      <Ionicons name="person-circle-outline" style={{fontSize: 20}} />
    ),
  },
];

export const SHEET_ACTION_BUTTON: SheetItemType[] = [
  {
    name: 'Save',
    iconName: () => <FontAwesome name="bookmark-o" style={{fontSize: 28}} />,
  },
  {
    name: 'Remix',
    iconName: () => <FontAwesome name="play" style={{fontSize: 28}} />,
  },
  {
    name: 'QR code',
    iconName: () => (
      <MaterialIcons name="qr-code-scanner" style={{fontSize: 28}} />
    ),
  },
];

export const PROFILE_SETTINGS_LIST: SheetItemType[] = [
  {
    name: 'Setting and privacy',
    iconName: () => <AntDesign name="setting" style={{fontSize: 20}} />,
  },
  {
    name: 'Threads',
    iconName: () => <Feather name="at-sign" style={{fontSize: 20}} />,
  },
  {
    name: 'Scheduled Content',
    iconName: () => <Feather name="clock" style={{fontSize: 20}} />,
  },
  {
    name: 'Insights',
    iconName: () => <Entypo name="bar-graph" style={{fontSize: 20}} />,
  },
  {
    name: 'Your Activity',
    iconName: () => <Feather name="activity" style={{fontSize: 20}} />,
  },
  {
    name: 'Archive',
    iconName: () => <MaterialIcons name="archive" style={{fontSize: 20}} />,
  },
  {
    name: 'QR code',
    iconName: () => (
      <MaterialIcons name="qr-code-scanner" style={{fontSize: 20}} />
    ),
  },
  {
    name: 'Saved',
    iconName: () => <FontAwesome name="bookmark-o" style={{fontSize: 20}} />,
  },
  {
    name: 'Supervision',
    iconName: () => <MaterialIcons name="people" style={{fontSize: 20}} />,
  },
  {
    name: 'Logout',
    iconName: () => <MaterialIcons name="logout" style={{fontSize: 20}} />,
  },
];

export const ADD_POST_OPTIONS: SheetItemType[] = [
  {
    name: 'Add location',
    iconName: () => <Entypo name="location-pin" style={{fontSize: 24}} />,
  },
  {
    name: 'Tag people',
    iconName: () => <Ionicons name="person" style={{fontSize: 24}} />,
  },
  {
    name: 'Audience',
    iconName: () => <AntDesign name="eye" style={{fontSize: 24}} />,
  },
  {
    name: 'Add product details',
    iconName: () => <Feather name="shopping-bag" style={{fontSize: 24}} />,
  },
  {
    name: 'Add reminder',
    iconName: () => <AntDesign name="calendar" style={{fontSize: 24}} />,
  },
  {
    name: 'Add music',
    iconName: () => <FontAwesome name="music" style={{fontSize: 24}} />,
  },
];
