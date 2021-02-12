import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FormData from 'form-data';
import { CPActivityIndicator } from '../ActivityIndicator';
import Logo from '../../assets/Logo.jpg';
import styles from './styles';

export const Register: React.FC<{
  HookRegisterUserAsync: (FormDatas: any) => Promise<boolean | null>;
}> = ({ HookRegisterUserAsync }) => {
  const [strNames, setStrNames] = useState('');
  const [strUser, setStrUser] = useState('');
  const [strPassword, setStrPassword] = useState('');
  const [blobImageUser, setBlobImageUser] = useState('');
  const [isActivedIndicator, setIsActived] = useState(false);
  // HOOKS

  //---------------------
  // MANEJO DE LA CAMARA
  //---------------------
  const OpenCameraAsync = async () => {
    const CameraAsync = await ImagePicker.launchCameraAsync({
      base64: true,
      allowsEditing: true,
      aspect: [4, 5],
      quality: 1,
    });
    if (!CameraAsync.cancelled) {
      setBlobImageUser(CameraAsync.uri);
    }
  };
  //-------------------
  // REGISTRAR USUARIO
  //-------------------
  const RegisterUserAsync = async () => {
    if (!ValidateData()) {
      return;
    }
    setIsActived(true);
    //------------------------
    // CONSTRUCCIÓN FORM DATA
    //------------------------
    const formData = new FormData();
    formData.append('strNames', strNames);
    formData.append('strUser', strUser);
    formData.append('strPassword', strPassword);
    formData.append('URLImgPerson', {
      uri: blobImageUser,
      type: 'image/jpeg',
      name: strNames,
    });
    const Result = await HookRegisterUserAsync(formData);
    setIsActived(false);
    if (Result) {
      alert('Usuario creado con éxito');
      setBlobImageUser('');
      setStrUser('');
      setStrNames('');
      setStrPassword('');
    } else {
      alert('Error al crear el usuario');
    }
  };
  //-------------------
  // VALIDAR DATA FORM
  //-------------------
  const ValidateData = () => {
    if (blobImageUser === '') {
      alert('Seleccione una foto de perfil.');
      return false;
    }
    if (strNames === '') {
      alert('Digite sus nombres.');
      return false;
    }
    if (strUser === '') {
      alert('Digite su usuario.');
      return false;
    }
    if (strPassword === '') {
      alert('Digite su clave');
      return false;
    }
    return true;
  };
  return (
    <View>
      <View style={styles.Container}>
        <View style={styles.ContainerImg}>
          <TouchableOpacity onPress={OpenCameraAsync}>
            <Image
              style={styles.Img}
              source={{
                uri:
                  blobImageUser === ''
                    ? 'https://gravatar.com/avatar/af020c667a3bd539b1ec582b322f7379?s=400&d=robohash&r=x'
                    : blobImageUser,
              }}
            />
          </TouchableOpacity>
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
          <Button
            style={styles.Button}
            icon="account-plus"
            mode="contained"
            dark
            onPress={() => {
              RegisterUserAsync();
            }}
          >
            Crear
          </Button>
        </View>
      </View>
      <CPActivityIndicator isActived={isActivedIndicator} />
    </View>
  );
};
