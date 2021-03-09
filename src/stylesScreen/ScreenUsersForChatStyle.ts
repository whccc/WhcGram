import { StyleSheet, Platform, StatusBar } from 'react-native';

const Style = StyleSheet.create({
  Container: {
    borderWidth: 1,
    height: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Style;
