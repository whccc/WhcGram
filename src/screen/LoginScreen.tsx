import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { withTheme } from 'react-native-paper';
import UserLocalStorageContext from '../context/UserLocalStorageContext';
import { Login } from '../components/Login';
import Styles from '../stylesScreen/ScreenLoginStyle';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { HookLoginAsync } = useContext(UserLocalStorageContext);
  return (
    <SafeAreaView style={Styles.Container}>
      <Login navigation={navigation} HookLoginAsync={HookLoginAsync} />
    </SafeAreaView>
  );
};

export default withTheme(LoginScreen);
