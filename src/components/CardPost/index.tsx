import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import AutoHeightImage from 'react-native-auto-height-image';
import Styles from './styles';

const win = Dimensions.get('window');

export const CardPost: React.FC<{
  URLImgPost: string;
  strTitle: string;
  strDescription: string;
  strUserPost: string;
  URLImgUserPost: string;
}> = ({
  URLImgPost,
  strTitle,
  strDescription,
  strUserPost,
  URLImgUserPost,
}) => (
  <View style={Styles.Container}>
    <Card>
      <Card.Content>
        <View>
          <Title>{strTitle}</Title>
        </View>
        <AutoHeightImage
          width={win.width - 50}
          animated
          source={{ uri: URLImgPost }}
        />
        <Paragraph>{strDescription}</Paragraph>
        <View style={Styles.ContainerPostUser}>
          <Image style={Styles.Img} source={{ uri: URLImgUserPost }} />
          <Text style={Styles.TextUserPost}>
            Públicado por:
            {strUserPost}
          </Text>
        </View>
      </Card.Content>
    </Card>
  </View>
);
