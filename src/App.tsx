import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import NavigationTabBottomScreen from './screen/NavigationTabBottomScreen';
import theme from './theme/main';

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
  return (
    <PaperProvider theme={theme}>
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
            headerShown: true,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={NavigationTabBottomScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
