import { SafeAreaView, FlatList, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { CardPost } from '../components/CardPost';
import { ModalAddPost } from '../components/Modal';
import Styles from '../stylesScreen/ScreenHomeStyle';
import usePost from '../hook/usePost';
import { IPostUser } from '../interfaces/interfaces';

const HomeScreen = () => {
  // HOOKS
  const { JsonDataPost, HookGetDataPostAsync, HookCreatePostAsync } = usePost();
  useEffect(() => {
    //----------------------------------
    // OBTENER DATA INICIAL DE LOS POST
    //----------------------------------
    const GetDataInitialAsync = async () => {
      await HookGetDataPostAsync();
    };
    GetDataInitialAsync();
  }, []);
  return (
    <SafeAreaView style={Styles.Container}>
      <FlatList
        style={{ marginBottom: 120 }}
        data={JsonDataPost}
        renderItem={({ item }: { item: IPostUser }) => (
          <CardPost
            URLImgUserPost={item.strIdUserPost.URLImgPerson}
            strUserPost={item.strIdUserPost.strNames}
            URLImgPost={item.URLImagen}
            strTitle={item.strTitle}
            strDescription={item.strDescription}
          />
        )}
        keyExtractor={(item) => item._id}
      />
      <ModalAddPost
        HookGetDataPostAsync={HookGetDataPostAsync}
        HookCreatePostAsync={HookCreatePostAsync}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
