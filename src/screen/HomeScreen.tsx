import { SafeAreaView, FlatList, View } from 'react-native';
import React from 'react';
import { CardPost } from '../components/CardPost';
import { ModalAddPost } from '../components/Modal';
import Styles from '../stylesScreen/ScreenHomeStyle';

const Data = [
  {
    id: 1,
  },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
];

const HomeScreen = () => (
  <SafeAreaView style={Styles.Container}>
    <FlatList
      style={{ marginBottom: 120 }}
      data={Data}
      renderItem={() => <CardPost />}
    />
    <ModalAddPost />
  </SafeAreaView>
);

export default HomeScreen;
