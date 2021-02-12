import React, { useState } from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import Modal from 'react-native-modal';
import { TextInput, Button, IconButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Animatable from 'react-native-animatable';
import FormData from 'form-data';
import { URL_IMGPOST } from '../../helpers/EnviromentVariables';
import Styles from './styles';

export const ModalAddPost: React.FC<{
  HookCreatePostAsync: (formData: any) => Promise<boolean>;
  HookGetDataPostAsync: () => Promise<void>;
}> = ({ HookGetDataPostAsync, HookCreatePostAsync }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [strTitle, setStrTitle] = useState('');
  const [strDescription, setStrDescription] = useState('');
  const [blobImgPost, setBlobImgPost] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  //---------------------
  // MANEJO DE LA CAMARA
  //---------------------
  const OpenCameraAsync = async () => {
    const CameraAsync = await ImagePicker.launchCameraAsync({
      base64: true,
    });
    if (!CameraAsync.cancelled) {
      setBlobImgPost(CameraAsync.uri);
    }
  };
  //------------
  // CREAR POST
  //------------
  const CreatePostAsync = async () => {
    if (!ValidateData()) {
      return;
    }
    const formData = new FormData();
    formData.append('strTitle', strTitle);
    formData.append('strDescription', strDescription);
    formData.append('URLImgPost', {
      uri: blobImgPost,
      type: 'image/jpeg',
      name: strTitle,
    });

    const Result = await HookCreatePostAsync(formData);
    if (Result === null) {
      alert('Error intentelo mas tarde.');
      return;
    }
    alert('Post creado con éxito.');
    setStrTitle('');
    setStrDescription('');
    setBlobImgPost('');
    setModalVisible(false);
    await HookGetDataPostAsync();
  };
  //---------------
  // VALIDATE DATA
  //---------------
  const ValidateData = () => {
    if (blobImgPost === '') {
      alert('Carge una imagen.');
      return false;
    }
    if (strTitle === '') {
      alert('Digite un titulo de la aventura.');
      return false;
    }
    if (strDescription === '') {
      alert('Digite una descripción.');
      return false;
    }
    return true;
  };

  return (
    <View style={{ flex: 1 }}>
      <Animatable.View
        style={Styles.ContainerAnimatableButton}
        animation="pulse"
        easing="ease-in-out"
        iterationCount="infinite"
      >
        <IconButton icon="plus" color="#fff" size={25} onPress={toggleModal} />
      </Animatable.View>
      <Modal
        isVisible={isModalVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="up"
      >
        <View>
          <ScrollView>
            <View style={Styles.ContainerImg}>
              <Text>Crear Publicación</Text>

              <Image
                style={Styles.Img}
                resizeMode="contain"
                source={{
                  uri: blobImgPost === '' ? URL_IMGPOST : blobImgPost,
                }}
              />
              <IconButton
                style={Styles.ButtonAddImg}
                icon="plus"
                color="#fff"
                size={25}
                onPress={OpenCameraAsync}
              />
            </View>
            <View style={Styles.ContainerData}>
              <TextInput
                mode="outlined"
                label="Titulo"
                placeholder="Titulo"
                value={strTitle}
                onChangeText={(text) => setStrTitle(text)}
              />
              <TextInput
                mode="outlined"
                label="Descripción"
                placeholder="Descripción"
                value={strDescription}
                onChangeText={(text) => setStrDescription(text)}
              />

              <Button
                mode="contained"
                onPress={CreatePostAsync}
                style={Styles.Button}
                icon="plus"
                dark
              >
                Agregar
              </Button>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};
