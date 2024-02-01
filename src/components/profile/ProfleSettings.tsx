/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from '@gluestack-ui/themed';
import {PROFILE_SETTINGS_LIST} from '../../utils/helpers';
import {BottomSheetProps, SheetItemType} from '../../utils/types';
import {useNavigation} from '@react-navigation/native';

const ProfileSettings = ({showModal, toggleModal}: BottomSheetProps) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  };
  return (
    <Actionsheet isOpen={showModal} onClose={toggleModal} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent h="$3/5" zIndex={999}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>

        {PROFILE_SETTINGS_LIST.map(({name, iconName}: SheetItemType) => {
          return (
            <ActionsheetItem
              onPress={() => {
                if (name === 'Logout') {
                  handleLogout();
                }
              }}>
              {iconName()}
              <ActionsheetItemText ml="$2.5" size="md" color="black">
                {name}
              </ActionsheetItemText>
            </ActionsheetItem>
          );
        })}
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default ProfileSettings;
