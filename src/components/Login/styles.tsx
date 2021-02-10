import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  Container: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 80,
    padding: 10,
    width: '100%',
  },
  ContainerImg: {
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  Button: {
    margin: 3,
    color: '#fff',
  },
  Img: { borderRadius: 100, height: 100, width: 100 },
  ContainerButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
  },
});
export default Styles;
