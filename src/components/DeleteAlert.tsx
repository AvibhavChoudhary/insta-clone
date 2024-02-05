import {
  Center,
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  Heading,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  ButtonGroup,
  ButtonText,
  Button,
  Icon,
  CloseIcon,
  Text,
} from '@gluestack-ui/themed';
import React from 'react';
import {DeleteDialogProps} from '../utils/types';

function DeleteAlert({
  showAlert,
  closeDialog,
  title,
  subTitle,
  onCancel,
  onConfirm,
  confirmButtonText,
  cancelButtonText,
}: DeleteDialogProps) {
  return (
    <Center h={300}>
      <AlertDialog isOpen={showAlert} onClose={closeDialog}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading size="lg">{title}</Heading>
            <AlertDialogCloseButton>
              <Icon as={CloseIcon} />
            </AlertDialogCloseButton>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text size="sm">{subTitle}</Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <ButtonGroup space="lg">
              <Button variant="outline" action="secondary" onPress={onCancel}>
                <ButtonText>{cancelButtonText}</ButtonText>
              </Button>
              <Button bg="$error600" action="negative" onPress={onConfirm}>
                <ButtonText>{confirmButtonText}</ButtonText>
              </Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Center>
  );
}

export default DeleteAlert;
