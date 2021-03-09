import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  Container: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
  },
  Img: {
    width: 50,
    height: 50,
    borderRadius: 100,
    resizeMode: 'cover',
  },
});

export default Styles;
