import React, { useEffect, useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import Styles from './styles';

export const CPListUser: React.FC<{
  URLImgPerson: string;
  IdRoom: string;
  strNames: string;
  navigation: any;
  idUserRoom: string;
  idUserApp: string;
  DataRoomInitialAsync: (DataRoom: any) => Promise<void>;
}> = ({
  URLImgPerson,
  strNames,
  IdRoom,
  navigation,
  idUserRoom,
  idUserApp,
  DataRoomInitialAsync,
}) => {
  // CONSULTAR EXISTENCIA DE SALA
  const FindRoomAsync = async () => {
    const DataInitial = {
      strType: '1V1',
      ArrayMembers: [
        {
          IdUser: idUserRoom,
        },
        {
          IdUser: idUserApp,
        },
      ],
    };
    await DataRoomInitialAsync(DataInitial);

    navigation.navigate('Chat', {
      idUserApp,
      URLImgPerson,
      strNames,
    });
  };
  if (idUserRoom === idUserApp) {
    return null;
  }
  return (
    <View style={Styles.Container}>
      <View>
        <Image style={Styles.Img} source={{ uri: URLImgPerson }} />
        <Text>{strNames}</Text>
      </View>
      <View>
        <Button
          icon="send"
          mode="contained"
          dark
          onPress={() => {
            FindRoomAsync();
          }}
        >
          Mensaje
        </Button>
      </View>
    </View>
  );
};
