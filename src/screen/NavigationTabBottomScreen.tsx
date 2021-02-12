import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import { SafeAreaView, View, Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React, { useContext, useState } from 'react';
import { ITabMenu } from '../interfaces/interfaces';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import ProfileScreen from './ProfileScreen';
import { AppBarProfile } from '../components/AppBarProfile';

import Theme from '../theme/main';
import UserLocalStorageContext from '../context/UserLocalStorageContext';

const tabs = [
  {
    key: 'Home',
    label: 'Inicio',
    icon: 'home',
    screen: <HomeScreen />,
    barColor: Theme.colors.primary,
    pressColor: 'rgba(255, 255, 255, 0.16)',
  },
  {
    key: 'Chat',
    label: 'Chats',
    icon: 'wechat',
    screen: <ChatScreen />,
    barColor: Theme.colors.primary,
    pressColor: 'rgba(255, 255, 255, 0.16)',
  },
  {
    key: 'Profile',
    label: 'Perfil',
    barColor: Theme.colors.primary,
    icon: 'profile',
    screen: <ProfileScreen />,
    pressColor: 'rgba(255, 255, 255, 0.16)',
  },
];

const NavigationTabBottomScreen = () => {
  const [activeTab, setactiveTab] = useState<string>('Home');
  const { JsonUser, HookCloseSessionAsync } = useContext(
    UserLocalStorageContext
  );
  //----------------
  // RENDER SCREENS
  //----------------
  const renderScreen = () =>
    (activeTab === 'Home' && tabs[0].screen) ||
    (activeTab === 'Chat' && tabs[1].screen) ||
    (activeTab === 'Profile' && tabs[2].screen);
  //-------------
  // RENDER ICONS
  //-------------
  const renderIcon = (icon: string) => () => (
    <Icon name={icon} size={30} color="#fff" />
  );
  //-------------
  // RENDER TAB
  //------------
  const renderTab = ({
    tab,
    isActive,
  }: {
    tab: ITabMenu;
    isActive: boolean;
  }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={renderIcon(tab.icon)}
    />
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ flex: 1 }}>
        <View>
          <AppBarProfile
            HookCloseSessionAsync={HookCloseSessionAsync}
            ImgUser={JsonUser.URLImgPerson}
            StrNames={JsonUser.strNames}
          />
          {renderScreen()}
        </View>
      </View>
      <BottomNavigation
        activeTab={activeTab}
        onTabPress={(newTab) => setactiveTab(newTab.key.toString())}
        renderTab={renderTab}
        tabs={tabs}
      />
    </SafeAreaView>
  );
};

export default NavigationTabBottomScreen;
