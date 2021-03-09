import { SafeAreaView, Text, View, Image } from 'react-native';
import React, { useContext, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Style from '../stylesScreen/ScreenChatUsersStyle';
import UserLocalStorageContext from '../context/UserLocalStorageContext';

const ChatScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { HookGetRoomsByUserAsync, JsonUser, ArrayRoomsUser } = useContext(
    UserLocalStorageContext
  );
  useEffect(() => {
    HookGetRoomsByUserAsync();
  }, []);
  return (
    <SafeAreaView style={Style.Container}>
      <Icon
        style={Style.ButtonFloting}
        name="users"
        size={30}
        color="#fff"
        onPress={() => {
          navigation.navigate('UsersForChat');
        }}
      />
      <View>
        {ArrayRoomsUser.map((Chat: any) => (
          <View style={Style.ContainerChat}>
            <Text>
              <Image
                source={{
                  uri:
                    Chat.strIdRoom.ArrayMembers[0].IdUser._id !== JsonUser._id
                      ? Chat.strIdRoom.ArrayMembers[0].IdUser.URLImgPerson
                      : Chat.strIdRoom.ArrayMembers[1].IdUser.URLImgPerson,
                }}
              />
              {Chat.strIdRoom.ArrayMembers[0].IdUser._id !== JsonUser._id
                ? Chat.strIdRoom.ArrayMembers[0].IdUser.strNames
                : Chat.strIdRoom.ArrayMembers[1].IdUser.strNames}
            </Text>
            <Text>
              {
                Chat.strIdRoom.ArrayMessages[
                  Chat.strIdRoom.ArrayMessages.length - 1
                ].Message
              }
            </Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
