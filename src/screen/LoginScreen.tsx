import React from 'react';
import { SafeAreaView } from 'react-native';
import { withTheme } from 'react-native-paper';
import { Login } from '../components/Login';
import Styles from '../stylesScreen/ScreenLoginStyle';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <SafeAreaView style={Styles.Container}>
    <Login navigation={navigation} />
  </SafeAreaView>
);

export default withTheme(LoginScreen);
