import { StyleSheet, Platform, StatusBar } from 'react-native';
import Theme from '../theme/main';

const Style = StyleSheet.create({
  Container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
  },
  Img: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  Text: {
    color: Theme.colors.colorText,
  },
  SectionUno: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.primary,
  },
  SectionDos: {
    flex: 1,
  },
  SectionTres: {
    padding: 5,
    backgroundColor: Theme.colors.primary,
    display: 'flex',
    flexDirection: 'row',
  },
  Input: {
    width: '80%',
    maxHeight: 100,
  },
  ButtonSend: {
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Style;
