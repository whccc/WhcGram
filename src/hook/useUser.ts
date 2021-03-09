import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';
import { URL_API } from '../helpers/EnviromentVariables';

const useUser = () => {
  const [JsonUser, setJsonUser] = useState({
    URLImgPerson: '',
    _id: '',
    strNames: '',
  });
  const [ArrayDataUsers, setArrayDataUsers] = useState([]);
  const [ArrayRoomsUser, setArrayRoomsUser] = useState([]);
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
      await axios.post(`${URL_API}/User`, FormData, {
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
      const Data = await axios.post(`${URL_API}/User/StartSesion`, {
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
  //----------------------------
  // OBTENER TODOS LOS USUARIOS
  //----------------------------
  const HookGetUsersAsync = async () => {
    try {
      const Data = await axios.get(`${URL_API}/User`);
      setArrayDataUsers(Data.data.DataUsers);
    } catch (Error) {
      setArrayDataUsers([]);
    }
  };
  //---------------------------
  // OBTENER SALAS DEL USUARIO
  //---------------------------
  const HookGetRoomsByUserAsync = async () => {
    try {
      const Data = await axios.get(
        `${URL_API}/User/GetRoomUser/${JsonUser._id}`
      );
      setArrayRoomsUser(Data.data.DataRoomsUser.ArrayRooms);
    } catch (Error) {
      setArrayRoomsUser([]);
    }
  };
  return {
    JsonUser,
    ArrayRoomsUser,
    ArrayDataUsers,
    HookRegisterUserAsync,
    HookLoginAsync,
    HookCloseSessionAsync,
    HookGetUsersAsync,
    HookGetRoomsByUserAsync,
  };
};

export default useUser;
