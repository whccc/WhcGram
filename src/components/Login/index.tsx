import { View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import React, { useState } from 'react';
import Styles from './styles';
import Logo from '../../assets/Logo.jpg';

export const Login: React.FC<{
  navigation: any;
  HookLoginAsync: ({
    strUser,
    strPassword,
  }: {
    strUser: string;
    strPassword: string;
  }) => Promise<boolean | null>;
}> = ({ navigation, HookLoginAsync }) => {
  const [strUser, setStrUser] = useState('');
  const [strPassword, setStrPassword] = useState('');

  //------------
  // LOGIN USER
  //------------
  const LoginUserAsync = async () => {
    if (!ValidateData()) {
      return;
    }
    const Data = await HookLoginAsync({ strUser, strPassword });
    if (Data === null) {
      alert('Ocurrio un error intentalo mas tarde.');
      return;
    }
    if (Data) {
      alert('Usuario correcto');
      return;
    }
    alert('Usuario o clave incorrectos');
  };
  //---------------
  // VALIDATE DATA
  //---------------
  const ValidateData = () => {
    if (strUser === '') {
      alert('No sea imbecil digite su usuario');
      return false;
    }
    if (strPassword === '') {
      alert('No sea imbecil digite su contraseña');
    }
    return true;
  };
  return (
    <View style={Styles.Container}>
      <View style={Styles.ContainerImg}>
        <Image source={Logo} style={Styles.Img} />
      </View>
      <View>
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
          placeholder="Contraseña"
          value={strPassword}
          secureTextEntry
          onChangeText={(Text) => setStrPassword(Text)}
        />
        <View style={Styles.ContainerButtons}>
          <Button
            icon="location-enter"
            mode="contained"
            style={Styles.Button}
            dark
            onPress={LoginUserAsync}
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
