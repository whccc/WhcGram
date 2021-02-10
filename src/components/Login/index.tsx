import { View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import Styles from './styles';
import Logo from '../../assets/Logo.jpg';

export const Login: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [strUser, setStrUser] = useState('');
  useEffect(() => {
    console.log(8);
  });
  return (
    <View style={Styles.Container}>
      <View style={Styles.ContainerImg}>
        <Image source={Logo} style={Styles.Img} />
      </View>
      <View>
        <TextInput
          mode="outlined"
          label="Usuario"
          value={strUser}
          onChangeText={(text) => setStrUser(text)}
        />
        <TextInput mode="outlined" label="Clave" />
        <View style={Styles.ContainerButtons}>
          <Button
            icon="location-enter"
            mode="contained"
            style={Styles.Button}
            dark
            onPress={() => navigation.navigate('Home')}
          >
            Iniciar
          </Button>
          <Button
            icon="account-plus-outline"
            mode="contained"
            style={Styles.Button}
            dark
            onPress={() => navigation.navigate('Register')}
          >
            Registrar
          </Button>
        </View>
      </View>
    </View>
  );
};
