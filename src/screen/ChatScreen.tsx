import { View, Text, SafeAreaView, Image } from 'react-native';
import React, { useEffect, useState, useContext, useRef, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import Person from '../assets/Person.png';
import { CPMessage } from '../components/Message';
import Style from '../stylesScreen/ScreenChatStyle';
import useRoom from '../hook/useRoom';
import useLocalStorage from '../hook/useLocalStorage';
import SocketIOClientContext from '../context/SocketIOClientContext';
import RoomConext from '../context/RoomContext';

const ChatScreen: React.FC<{ navigation: any; route: any }> = ({
  navigation,
  route,
}) => {
  const [idUser, setIdUser] = useState<{ _id: string }>({ _id: '' });
  const ListRef: any = useRef(null);
  const [strMessage, setStrMessage] = useState('');
  const [strMessageWritingChat, setStrMessageWritingChat] = useState('');
  const { JsonDataRoom, HookUpdateRoomAsync } = useContext(RoomConext);
  const [JsonDataUserChat, setJsonDataUserChat] = useState({
    URLImgPerson: '',
    strNames: '',
  });
  const [JsonDataRoomChat, setJsonDataRoom] = useState<any>(JsonDataRoom);
  // HOOKS
  const { SendMessageRoomAsync } = useRoom();
  const { HookGetDataLocalStorageAsync } = useLocalStorage();
  const {
    JsonDataSocket,
    HookEmitMessageAsync,
    HookOnMessageAsync,
    HookUpdateDataSocketJson,
  } = useContext(SocketIOClientContext);

  useEffect(() => {
    //--------------------------------------------
    // DATA INICIAL
    //--------------------------------------------
    const GetDataInitialScreenAsync = async () => {
      const { idUserApp, URLImgPerson, strNames } = route.params;
      JsonDataRoomChat._idSendingUser = idUserApp;

      setJsonDataRoom(JsonDataRoom);
      setJsonDataUserChat({
        URLImgPerson,
        strNames,
      });
      setIdUser(await HookGetDataLocalStorageAsync());
      // ADD USUARIO A LA SALA SOCKET
      await HookEmitMessageAsync('AddUserRoom', JsonDataRoomChat);
      await HookOnMessageAsync('onMessage');
      await HookOnMessageAsync('onMessageWritingChat');
    };
    GetDataInitialScreenAsync();
  }, []);
  // AGEGAR NUEVOS MENSAJES SI TIENE EL CHAT ABIERTO
  useEffect(() => {
    const AddNewMessageSocketAsync = async () => {
      if (
        JsonDataRoomChat._id === JsonDataSocket.IdRoom &&
        JsonDataSocket.TypeEvent === 'onMessage'
      ) {
        JsonDataRoomChat.ArrayMessages.push({
          _idSendingUser: JsonDataSocket._idSendingUser,
          Message: JsonDataSocket.strMessage,
        });
        setJsonDataRoom({
          ...JsonDataRoomChat,
          ArrayMessages: JsonDataRoomChat.ArrayMessages,
        });
        setStrMessageWritingChat('');
      }

      if (JsonDataSocket.TypeEvent === 'onMessageWritingChat') {
        if (JsonDataSocket._idSendingUser !== idUser._id) {
          setStrMessageWritingChat('Escribiendo...');
        }
        if (JsonDataSocket.LengthMessage <= 1) {
          setStrMessageWritingChat('');
        }
      }
    };
    AddNewMessageSocketAsync();
  }, [JsonDataSocket]);
  //----------------------
  // EMITIR ESCRIBIR CHAT
  //----------------------
  const EmitKeyPressChatAsync = async (Data: any) => {
    const DataWriting = {
      strMessage: 'Escribiendo....',
      LengthMessage: strMessage.length,
      IdRoom: JsonDataRoomChat._id,
      _idSendingUser: JsonDataRoomChat._idSendingUser,
    };
    await HookEmitMessageAsync('onMessageWriting', DataWriting);
  };
  //---------------------
  // ENVIAR MENSAJE ROOM
  //---------------------
  const SendMessageAsync = async () => {
    if (!ValidateData()) {
      return;
    }
    const JsonRoom = {
      IdRoom: JsonDataRoomChat._id,
      strMessage,
      _idSendingUser: JsonDataRoomChat._idSendingUser,
    };
    JsonDataRoom.Message = strMessage;
    await SendMessageRoomAsync(JsonRoom);
    // ENVIO DATA CHAT
    await HookEmitMessageAsync('onMessageChat', JsonRoom);
    setStrMessage('');
  };
  //--------------
  // VALIDAR DATA
  //--------------
  const ValidateData = () => {
    if (strMessage === '') {
      alert('Digite un mensaje.');
      return false;
    }
    return true;
  };

  const RenderListMessages = ({ item }: { item: any }) => (
    <CPMessage
      idUserApp={idUser._id}
      idUserSendMessage={item._idSendingUser}
      Message={item.Message}
    />
  );
  const MemoizedMessage = useMemo(() => RenderListMessages, [
    JsonDataRoomChat.ArrayMessages,
    idUser._id,
  ]);
  return (
    <SafeAreaView style={Style.Container}>
      <View style={Style.SectionUno}>
        <Icon
          onPress={() => {
            navigation.navigate('UsersForChat');
            HookUpdateDataSocketJson();
            HookUpdateRoomAsync();
          }}
          name="arrow-back"
          size={30}
          color="#fff"
        />
        <View>
          <Image
            source={{ uri: JsonDataUserChat.URLImgPerson }}
            style={Style.Img}
          />
          <Text style={Style.Text}>{JsonDataUserChat.strNames}</Text>
          {strMessageWritingChat !== '' && <Text>{strMessageWritingChat}</Text>}
        </View>
      </View>

      <View style={Style.SectionDos}>
        <FlatList
          ref={ListRef}
          initialNumToRender={10}
          onContentSizeChange={() => {
            setTimeout(() => {
              ListRef.current.scrollToEnd();
            }, 1000);
          }}
          data={JsonDataRoomChat.ArrayMessages}
          renderItem={MemoizedMessage}
          keyExtractor={(item, index) =>
            item.Message + item._idSendingUser + index
          }
          removeClippedSubviews
        />
      </View>

      <View style={Style.SectionTres}>
        <TextInput
          style={Style.Input}
          multiline
          placeholder="Mensaje..."
          mode="outlined"
          value={strMessage}
          onChangeText={(text) => {
            setStrMessage(text);
            EmitKeyPressChatAsync(text);
          }}
        />
        <View style={Style.ButtonSend}>
          <Icon name="send" size={30} color="#fff" onPress={SendMessageAsync} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
