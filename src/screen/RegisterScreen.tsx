import React from 'react';
import { SafeAreaView } from 'react-native';
import { Register } from '../components/Register';
import Styles from '../stylesScreen/ScreenRegisterStyle';

const RegisterScreen = () => (
  <SafeAreaView style={Styles.Container}>
    <Register />
  </SafeAreaView>
);

export default RegisterScreen;
