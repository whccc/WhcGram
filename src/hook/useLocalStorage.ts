import AsyncStorage from '@react-native-community/async-storage';

const useLocalStorage = () => {
  //------------------
  // CREAR DATA LOCAL
  //------------------
  const HookCreateLocalStorageAsync = async ({
    URLImgPerson,
    _id,
    strNames,
  }: {
    URLImgPerson: string;
    _id: string;
    strNames: string;
  }) => {
    await AsyncStorage.setItem(
      'DataUser',
      JSON.stringify({
        URLImgPerson,
        _id,
        strNames,
      })
    );
  };
  //------------------------
  // GET DATA LOCAL STORAGE
  //------------------------
  const HookGetDataLocalStorageAsync = async () => {
    const JsonData = (await AsyncStorage.getItem('DataUser')) || '';
    return JSON.parse(JsonData);
  };
  //----------------------
  // DELETE LOCAL STORAGE
  //----------------------
  const HookDeleteDataLocalStorageAsync = async () => {
    await AsyncStorage.removeItem('DataUser');
  };
  return {
    HookCreateLocalStorageAsync,
    HookGetDataLocalStorageAsync,
    HookDeleteDataLocalStorageAsync,
  };
};

export default useLocalStorage;
