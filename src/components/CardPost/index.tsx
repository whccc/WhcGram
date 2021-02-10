import React from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import Person from '../../assets/Person.png';
import Cartagena from '../../assets/Cartagena.jpg';
import Styles from './styles';

export const CardPost = () => {
  const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <View style={Styles.Container}>
      <Card style={{ padding: 20 }}>
        <Card.Content>
          <View>
            <Title>VACACIONES EN CARTAGENA!!</Title>
          </View>
        </Card.Content>
        <Card.Cover source={Cartagena} />
        <Paragraph>Fui a visitar Cartagena con toda mi familia.!!</Paragraph>
        <View style={Styles.ContainerPostUser}>
          <Image style={Styles.Img} source={Person} />
          <Text style={Styles.TextUserPost}>Públicado por: Wilson Castro</Text>
        </View>
      </Card>
    </View>
  );
};
