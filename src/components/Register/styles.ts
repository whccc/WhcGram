import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
    zIndex: 1,
  },
  ContainerImg: {
    display: 'flex',
    alignSelf: 'center',
  },
  Img: {
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  Button: {
    marginTop: 5,
  },
});

export default styles;
