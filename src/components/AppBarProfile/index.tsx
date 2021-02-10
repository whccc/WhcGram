import { View, Text, Image } from 'react-native';
import React from 'react';
import Avatar from '../../assets/Person.png';
import Styles from './styles';

export const AppBarProfile = () => (
  <View style={Styles.Container}>
    <View>
      <Text style={Styles.TextTitle}>WHCGRAM</Text>
    </View>
    <View>
      <Image source={Avatar} style={Styles.Img} />
    </View>
  </View>
);
