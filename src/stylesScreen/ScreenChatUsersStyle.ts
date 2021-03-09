import { StyleSheet } from 'react-native';
import Theme from '../theme/main';

const Style = StyleSheet.create({
  Container: {
    height: '100%',
  },
  ButtonFloting: {
    position: 'absolute',
    backgroundColor: Theme.colors.secundary,
    padding: 10,
    borderRadius: 100,
    bottom: 170,
    right: 10,
    elevation: 5,
  },
  ContainerChat: {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
});

export default Style;
