import { View, Text, Image } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';
import Styles from './styles';

export const AppBarProfile: React.FC<{
  HookCloseSessionAsync: () => Promise<void>;
  ImgUser: string;
  StrNames: string;
}> = ({ HookCloseSessionAsync, ImgUser, StrNames }) => (
  <View style={Styles.Container}>
    <View>
      <Image source={{ uri: ImgUser }} style={Styles.Img} />
      <Text style={Styles.TextTitle}>{StrNames}</Text>
    </View>
    <View style={Styles.ContainerAvatar}>
      <Text style={Styles.TextTitle}>WHCGRAM</Text>
      <IconButton
        onPress={HookCloseSessionAsync}
        icon="login"
        color="#fff"
        size={30}
      />
    </View>
  </View>
);
