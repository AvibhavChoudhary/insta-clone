import {
  Box,
  Image,
  Input,
  InputField,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Login = () => {
  return (
    <Box flex={1} justifyContent="center" style={styles.container}>
      <Box w="$full" bgColor="red">
        <Image
          w={400}
          h={100}
          source={{
            uri: 'https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1.png',
          }}
          alt="Instagram-Logo"
          style={{
            marginTop: -200,
          }}
        />
      </Box>
      <Box flexDirection="column" alignItems="center">
        <Input
          variant="outline"
          w="80%"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}>
          <InputField placeholder="Enter Text here" />
        </Input>
        <Button
          size="md"
          w="80%"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}>
          <ButtonText>Add </ButtonText>
        </Button>
      </Box>
    </Box>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
  },
});
