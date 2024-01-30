import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import InputBox from '../components/InputBox';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const handleLogin = values => {
    // console.log(values);
    navigation.navigate('Bottom');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image
          source={require('../../assets/images/Instagram-logo.png')}
          style={styles.logoImage}
        />

        <View>
          <InputBox
            placeholder={'Username, email address or mobile number'}
            // onChangeText={handleChange('username')}
            // onBlur={handleBlur('username')}
            // value={values.username}
            // touched={touched.username}
            // errors={errors.username}
          />

          <CustomButton
            buttonTitle={'Login'}
            onPress={handleLogin}
            // disabled={!isValid}
          />
        </View>

        <TouchableOpacity style={{marginTop: 20, alignSelf: 'center'}}>
          <Text style={{fontSize: 16}}>Forgotten Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <TouchableOpacity
          style={{marginBottom: 20, alignSelf: 'center'}}
          // onPress={() => navigation.navigate('Signup')}
        >
          <Text style={{fontSize: 16}}>Create new account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoImage: {
    marginBottom: 50,
    alignSelf: 'center',
  },
});
