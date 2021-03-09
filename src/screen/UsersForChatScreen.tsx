import React, { useContext, useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Appbar } from 'react-native-paper';
import { uid } from 'uid/secure';
import useRoom from '../hook/useRoom';
import { CPListUser } from '../components/ListUser';
import { IUser } from '../interfaces/interfaces';
import Styles from '../stylesScreen/ScreenUsersForChatStyle';
import UserLocalStorageContext from '../context/UserLocalStorageContext';
import RoomConext from '../context/RoomContext';

const UsersForChatScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { JsonUser, HookGetUsersAsync, ArrayDataUsers } = useContext(
    UserLocalStorageContext
  );
  const { DataRoomInitialAsync } = useContext(RoomConext);

  useEffect(() => {
    const GetUsersAsync = async () => {
      await HookGetUsersAsync();
    };
    GetUsersAsync();
  }, []);
  return (
    <SafeAreaView style={Styles.Container}>
      <Appbar>
        <Appbar.BackAction onPress={navigation.goBack} color="#fff" />
        <Appbar.Content title="Chatea con tus amigos" color="#fff" />
      </Appbar>
      <FlatList
        data={ArrayDataUsers}
        renderItem={({ item }: { item: IUser }) => (
          <CPListUser
            idUserRoom={item._id}
            idUserApp={JsonUser._id}
            strNames={item.strNames}
            URLImgPerson={item.URLImgPerson}
            IdRoom={item._id + JsonUser._id}
            navigation={navigation}
            DataRoomInitialAsync={DataRoomInitialAsync}
          />
        )}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};

export default UsersForChatScreen;
