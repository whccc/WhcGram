import React from 'react';
import { View, Text, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Person from '../../assets/Person.png';
import Styles from './styles';

export const CardPost = () => {
  const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <View style={Styles.Container}>
      <Card style={{ padding: 20 }}>
        <Card.Content>
          <View style={Styles.ContainerUserProfile}>
            <Title>VACACIONES</Title>
            <View style={Styles.ContainerPostUser}>
              <Image style={Styles.Img} source={Person} />
              <Text style={Styles.TextUserPost}>
                Publicado por: Wilson Castro
              </Text>
            </View>
          </View>
          <Paragraph>Fui a visitar cartagena!!</Paragraph>
        </Card.Content>
        <Card.Cover
          source={{
            uri:
              'https://i.picsum.photos/id/756/700/700.jpg?hmac=qi6xGSLGWTu3DDGqAKuzirvbQAvJ7JxWN1TPDZqjbe8',
          }}
        />
      </Card>
    </View>
  );
};
