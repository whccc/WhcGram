import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Image } from 'react-native';
import Logo from '../../assets/Logo.jpg';
import styles from './styles';

export const Register = () => {
  const [strNames, setStrNames] = useState('');
  const [strUser, setStrUser] = useState('');
  const [strPassword, setStrPassword] = useState('');

  return (
    <View style={styles.Container}>
      <View style={styles.ContainerImg}>
        <Image style={styles.Img} source={Logo} />
      </View>
      <View>
        <TextInput
          mode="outlined"
          label="Nombre"
          placeholder="Nombres"
          value={strNames}
          onChangeText={(text) => setStrNames(text)}
        />
        <TextInput
          mode="outlined"
          label="Usuario"
          placeholder="Usuario"
          value={strUser}
          onChangeText={(text) => setStrUser(text)}
        />
        <TextInput
          mode="outlined"
          label="Clave"
          placeholder="Clave"
          value={strPassword}
          onChangeText={(text) => setStrPassword(text)}
        />
        <Button style={styles.Button} icon="account-plus" mode="contained" dark>
          Crear
        </Button>
      </View>
    </View>
  );
};
