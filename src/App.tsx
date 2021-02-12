import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import UserLocalStorageContext from './context/UserLocalStorageContext';
import NavigationTabBottomScreen from './screen/NavigationTabBottomScreen';
import theme from './theme/main';
import useUser from './hook/useUser';

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
  } = useUser();

  return (
    <PaperProvider theme={theme}>
      <UserLocalStorageContext.Provider
        value={{
          JsonUser,
          HookRegisterUserAsync,
          HookLoginAsync,
          HookCloseSessionAsync,
        }}
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
              <Stack.Screen name="Home" component={NavigationTabBottomScreen} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </UserLocalStorageContext.Provider>
    </PaperProvider>
  );
}
