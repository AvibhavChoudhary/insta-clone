/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../components/InputBox';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {Box, Text} from '@gluestack-ui/themed';
import {Error} from '../utils/types';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<Error>({
    show: false,
    message: '',
  });
  const navigation = useNavigation();
  const handleLogin = () => {
    setError({
      show: false,
      message: '',
    });
    if (username.includes('avibhav') || username.includes('Avibhav')) {
      navigation.navigate('Bottom');
      setUsername('');
    } else {
      setError({
        show: true,
        message: 'User not found',
      });
    }
  };

  return (
    <Box flex={1} alignItems="center" bg="$white">
      <Box flex={1} justifyContent="center">
        <Image
          source={require('../../assets/images/Instagram-logo.png')}
          style={styles.logoImage}
        />

        <Box>
          <InputBox
            placeholder={'Username, email address or mobile number'}
            onChangeText={e => setUsername(e)}
            value={username}
            showError={error.show}
            errorMessage={error.message}
          />

          <CustomButton
            buttonTitle={'Login'}
            onPress={handleLogin}
            disabled={username ? false : true}
          />
        </Box>

        <TouchableOpacity style={{marginTop: 20, alignSelf: 'center'}}>
          <Text fontSize="$md">Forgotten Password?</Text>
        </TouchableOpacity>
      </Box>
      <Box justifyContent="flex-end">
        <TouchableOpacity
          style={{marginBottom: 20, alignSelf: 'center'}}
          // onPress={() => navigation.navigate('Signup')}
        >
          <Text fontSize="$md">Create new account</Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoImage: {
    marginBottom: 50,
    alignSelf: 'center',
  },
});
