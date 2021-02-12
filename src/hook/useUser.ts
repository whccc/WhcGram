import axios from 'axios';
import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';
import { URL_API } from '../helpers/EnviromentVariables';

const useUser = () => {
  const [JsonUser, setJsonUser] = useState({
    URLImgPerson: '',
    _id: '',
    strNames: '',
  });
  // HOOKS
  const {
    HookCreateLocalStorageAsync,
    HookGetDataLocalStorageAsync,
    HookDeleteDataLocalStorageAsync,
  } = useLocalStorage();

  useEffect(() => {
    const GetDataLocalStorageAsync = async () => {
      const Data = await HookGetDataLocalStorageAsync();
      if (Data !== '') {
        setJsonUser(Data);
      }
    };
    GetDataLocalStorageAsync();
  }, []);

  //------------------
  // REGISTRO USUARIO
  //------------------
  const HookRegisterUserAsync = async (FormData: any) => {
    try {
      await axios.post(`${URL_API}/Login`, FormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return true;
    } catch (Error) {
      return false;
    }
  };
  //----------------
  // INICIAR SESION
  //----------------
  const HookLoginAsync = async ({
    strUser,
    strPassword,
  }: {
    strUser: string;
    strPassword: string;
  }) => {
    try {
      const Data = await axios.post(`${URL_API}/Login/StartSesion`, {
        strUser,
        strPassword,
      });

      //----------------------------
      // CREANDO DATA LOCAL STORAGE
      //----------------------------
      if (Data.data.Success) {
        const { URLImgPerson, _id, strNames } = Data.data.DataUser;
        await HookCreateLocalStorageAsync({ URLImgPerson, _id, strNames });
        // AGREGAR DATOS USER
        setJsonUser({ URLImgPerson, _id, strNames });
      } else {
        setJsonUser({
          URLImgPerson: '',
          _id: '',
          strNames: '',
        });
      }
      return Data.data.Success;
    } catch (Error) {
      return null;
    }
  };
  //---------------
  // CERRAR SESION
  //---------------
  const HookCloseSessionAsync = async () => {
    await HookDeleteDataLocalStorageAsync();
    setJsonUser({
      URLImgPerson: '',
      _id: '',
      strNames: '',
    });
  };
  return {
    JsonUser,
    HookRegisterUserAsync,
    HookLoginAsync,
    HookCloseSessionAsync,
  };
};

export default useUser;
