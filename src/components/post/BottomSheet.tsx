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
  HStack,
  VStack,
} from '@gluestack-ui/themed';
import {SHEET_ACTION_BUTTON, SHEET_LIST_ITEMS} from '../../utils/helpers';
import {SheetItemType} from '../../utils/types';

const BottomSheet = ({showModal, toggleModal}: BottomSheetProps) => {
  return (
    <Actionsheet isOpen={showModal} onClose={toggleModal} zIndex={999}>
      <ActionsheetBackdrop />
      <ActionsheetContent h="$3/5" zIndex={999}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>

        <HStack
          alignItems="center"
          justifyContent="space-around"
          w="$full"
          paddingVertical="$2.5">
          {SHEET_ACTION_BUTTON.map(({name, iconName}: SheetItemType) => {
            return (
              <VStack alignItems="center" key={name}>
                <ActionsheetItem
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  w="$16"
                  h="$16"
                  borderRadius="$full"
                  borderWidth="$1"
                  borderColor="$black">
                  {iconName()}
                </ActionsheetItem>
                <ActionsheetItemText ml="$2.5" size="md" color="black">
                  {name}
                </ActionsheetItemText>
              </VStack>
            );
          })}
        </HStack>

        {SHEET_LIST_ITEMS.map(({name, iconName}: SheetItemType) => {
          return (
            <ActionsheetItem key={name}>
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

export default BottomSheet;
