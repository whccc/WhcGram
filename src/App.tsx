import React, { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import NavigationTabBottomScreen from './screen/NavigationTabBottomScreen';
import UserForChatScreen from './screen/UsersForChatScreen';
import ChatScreen from './screen/ChatScreen';
import theme from './theme/main';
import useUser from './hook/useUser';
import useSocketIO from './hook/useSocketIo';
import useRoom from './hook/useRoom';
// Context

import UserLocalStorageContext from './context/UserLocalStorageContext';
import SocketIOClientContext from './context/SocketIOClientContext';
import RoomContext from './context/RoomContext';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#eee',
    border: 'red',
  },
};

export default function App() {
  const {
    JsonUser,
    HookRegisterUserAsync,
    HookLoginAsync,
    HookCloseSessionAsync,
    HookGetUsersAsync,
    HookGetRoomsByUserAsync,
    ArrayDataUsers,
    ArrayRoomsUser,
  } = useUser();

  const {
    JsonDataSocket,
    SocketIOClient,
    HookEmitMessageAsync,
    HookConnectionSocketIOAsync,
    HookOnMessageAsync,
    HookUpdateDataSocketJson,
  } = useSocketIO();

  const { JsonDataRoom, DataRoomInitialAsync, HookUpdateRoomAsync } = useRoom();
  // SI LLEGA UN NUEVO MENSAJE Y NO TIENE ABIERTO LA SALA
  // SE ENVIA UNA ALERTA DE NOTIFICACIÓN
  useEffect(() => {
    if (
      JsonDataSocket.IdRoom != null &&
      JsonDataSocket.TypeEvent === 'onMessage'
    ) {
      if (JsonDataRoom._id !== JsonDataSocket.IdRoom) {
        alert('Tiene un nuevo mensaje');
      }
    }
  }, [JsonDataSocket]);
  return (
    <PaperProvider theme={theme}>
      <SocketIOClientContext.Provider
        value={{
          SocketIOClient,
          JsonDataSocket,
          HookConnectionSocketIOAsync,
          HookEmitMessageAsync,
          HookOnMessageAsync,
          HookUpdateDataSocketJson,
        }}
      >
        <UserLocalStorageContext.Provider
          value={{
            JsonUser,
            HookRegisterUserAsync,
            HookLoginAsync,
            HookCloseSessionAsync,
            HookGetUsersAsync,
            HookGetRoomsByUserAsync,
            ArrayDataUsers,
            ArrayRoomsUser,
          }}
        >
          <RoomContext.Provider
            value={{ DataRoomInitialAsync, JsonDataRoom, HookUpdateRoomAsync }}
          >
            <NavigationContainer theme={MyTheme}>
              <Stack.Navigator
                screenOptions={{
                  headerBackground: () => (
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: theme.colors.primary,
                      }}
                    />
                  ),
                  headerTintColor: '#fff',
                  headerPressColorAndroid: '#fff',
                  headerShown: JsonUser.URLImgPerson === '',
                }}
              >
                {JsonUser.URLImgPerson === '' ? (
                  <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                  </>
                ) : (
                  <>
                    <Stack.Screen
                      name="Home"
                      component={NavigationTabBottomScreen}
                    />
                    <Stack.Screen
                      name="UsersForChat"
                      component={UserForChatScreen}
                    />
                    <Stack.Screen name="Chat" component={ChatScreen} />
                  </>
                )}
              </Stack.Navigator>
            </NavigationContainer>
          </RoomContext.Provider>
        </UserLocalStorageContext.Provider>
      </SocketIOClientContext.Provider>
    </PaperProvider>
  );
}
