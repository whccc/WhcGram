import { StyleSheet, Platform, StatusBar } from 'react-native';

const Styles = StyleSheet.create({
  Container: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Styles;
