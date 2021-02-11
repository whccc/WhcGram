import { ActivityIndicator } from 'react-native-paper';
import React from 'react';
import { View } from 'react-native';
import Theme from '../../theme/main';
import Styles from './styles';

export const CPActivityIndicator = ({ isActived }: { isActived: boolean }) =>
  isActived ? (
    <View style={Styles.Container}>
      <ActivityIndicator
        animating={isActived}
        size="large"
        color={Theme.colors.secundary}
      />
    </View>
  ) : null;
