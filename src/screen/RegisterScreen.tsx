import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import UserLocalStorageContext from '../context/UserLocalStorageContext';
import { Register } from '../components/Register';
import Styles from '../stylesScreen/ScreenRegisterStyle';

const RegisterScreen = () => {
  const { HookRegisterUserAsync } = useContext(UserLocalStorageContext);
  return (
    <SafeAreaView style={Styles.Container}>
      <Register HookRegisterUserAsync={HookRegisterUserAsync} />
    </SafeAreaView>
  );
};

export default RegisterScreen;
