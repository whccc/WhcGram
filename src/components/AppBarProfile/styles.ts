import { StyleSheet } from 'react-native';
import Theme from '../../theme/main';

const Styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Theme.colors.primary,
    padding: 5,
  },
  TextTitle: {
    color: Theme.colors.colorText,
    fontWeight: 'bold',
  },
  Img: {
    width: 50,
    height: 50,
  },
});

export default Styles;
