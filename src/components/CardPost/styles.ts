import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  Container: {
    padding: 10,
  },
  ContainerUserProfile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Img: {
    width: 35,
    height: 35,
  },
  TextUserPost: {
    fontSize: 10,
  },
  ContainerPostUser: {
    alignItems: 'flex-end',
  },
});

export default Styles;
