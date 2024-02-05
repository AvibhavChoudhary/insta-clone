/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  HStack,
  ScrollView,
  VStack,
  useToast,
} from '@gluestack-ui/themed';
import {
  SHEET_ACTION_BUTTON,
  SHEET_LIST_ITEMS,
  showToastMessage,
} from '../../utils/helpers';
import {BottomSheetProps, SheetItemType} from '../../utils/types';
import {useNavigation} from '@react-navigation/native';
import DeleteAlert from '../DeleteAlert';
import PostContext from '../../context/PostContext';

const BottomSheet = ({showModal, toggleModal, postData}: BottomSheetProps) => {
  const navigation = useNavigation();
  const [showDelete, setShowDelete] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const {removePost} = useContext(PostContext);
  const toast = useToast();

  const closeDialog = () => {
    setShowDelete(false);
    setPostToDelete(null);
  };

  const handleDelete = () => {
    removePost(postToDelete);
    closeDialog();
    toggleModal();
    showToastMessage({
      toastRef: toast,
      title: 'Success',
      description: 'Your post has been deleted successfully',
      variant: 'accent',
      action: 'success',
      placement: 'top',
    });
  };

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
        <ScrollView w="$full" showsVerticalScrollIndicator={false}>
          {SHEET_LIST_ITEMS.map(({name, iconName}: SheetItemType) => {
            return (
              <ActionsheetItem
                key={name}
                onPress={() => {
                  if (name === 'Edit') {
                    navigation.navigate('AddPost', {
                      postData: postData.post,
                      postId: postData.id,
                    });
                    toggleModal();
                  }
                  if (name === 'Delete') {
                    setShowDelete(true);
                    setPostToDelete(postData.id);
                  }
                }}>
                {iconName()}
                <ActionsheetItemText
                  ml="$2.5"
                  size="md"
                  color={name === 'Delete' ? 'red' : 'black'}>
                  {name}
                </ActionsheetItemText>
              </ActionsheetItem>
            );
          })}
        </ScrollView>
      </ActionsheetContent>
      <DeleteAlert
        showAlert={showDelete}
        closeDialog={closeDialog}
        title="Delete Post"
        subTitle="Are you sure you want to delete this post? Your post will
        be permanently removed."
        confirmButtonText="Yes, Delete"
        cancelButtonText="No, Cancel"
        onCancel={closeDialog}
        onConfirm={handleDelete}
      />
    </Actionsheet>
  );
};

export default BottomSheet;
