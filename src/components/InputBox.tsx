import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {InputProps} from '../utils/types';
import {Box, Text} from '@gluestack-ui/themed';

const InputBox = ({
  placeholder,
  onChangeText,
  value,
  errorMessage,
  showError,
}: InputProps) => {
  return (
    <Box h="$16">
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
      {showError && (
        <Text color="$error600" paddingLeft="$1" size="xs">
          {errorMessage}
        </Text>
      )}
    </Box>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    width: 350,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: '65%',
  },
});
