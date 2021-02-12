import { StyleSheet } from 'react-native';
import Theme from '../../theme/main';

const Styles = StyleSheet.create({
  ContainerModal: {
    padding: 40,
  },
  ContainerImg: {
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: 260,
    padding: 10,
    backgroundColor: '#fff',
    zIndex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  Img: {
    borderRadius: 5,
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  ButtonAddImg: {
    position: 'absolute',
    color: '#fff',
    bottom: -20,
    zIndex: 10,
    elevation: 10,
    right: 0,
    width: 50,
    borderRadius: 100,
    height: 50,
    backgroundColor: Theme.colors.secundary,
  },
  ContainerAnimatableButton: {
    position: 'absolute',
    bottom: 170,
    borderColor: '#fff',
    right: 10,
    elevation: 10,
    backgroundColor: Theme.colors.secundary,
    borderRadius: 100,
  },
  ContainerData: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  Button: {
    marginTop: 5,
    backgroundColor: Theme.colors.secundary,
  },
});

export default Styles;
