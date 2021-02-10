import React, { useState } from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import Modal from 'react-native-modal';
import { TextInput, Button, IconButton } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import Logo from '../../assets/ImagenPaisaje.jpg';

import Styles from './styles';

export const ModalAddPost = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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
              <Image style={Styles.Img} resizeMode="cover" source={Logo} />
              <IconButton
                style={Styles.ButtonAddImg}
                icon="plus"
                color="#fff"
                size={25}
                onPress={() => console.log(6)}
              />
            </View>
            <View style={Styles.ContainerData}>
              <TextInput mode="outlined" label="Titulo" placeholder="Titulo" />
              <TextInput
                mode="outlined"
                label="Descripción"
                placeholder="Descripción"
              />
              <TextInput
                mode="outlined"
                label="Descripción"
                placeholder="Descripción"
              />

              <Button mode="contained" style={Styles.Button} icon="plus" dark>
                Agregar
              </Button>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};
