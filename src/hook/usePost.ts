import axios from 'axios';
import { useState } from 'react';
import { URL_API } from '../helpers/EnviromentVariables';
import useLocalStorage from './useLocalStorage';

const usePost = () => {
  const [JsonDataPost, setJsonDataPost] = useState([]);
  // HOOK
  const { HookGetDataLocalStorageAsync } = useLocalStorage();
  //-----------
  // CREAR POST
  //-----------
  const HookCreatePostAsync = async (FormData: any) => {
    try {
      const { _id } = await HookGetDataLocalStorageAsync();
      FormData.append('_id', _id);
      const Data = await axios.post(`${URL_API}/Post/CreatePost`, FormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return Data.data.Success;
    } catch (Error) {
      return null;
    }
  };
  //--------------
  // GET DATA POTS
  //--------------
  const HookGetDataPostAsync = async () => {
    try {
      const { _id } = await HookGetDataLocalStorageAsync();
      const Data = await axios.get(`${URL_API}/Post/${_id}`);
      setJsonDataPost(Data.data.DataPost);
    } catch (Error) {
      setJsonDataPost([]);
    }
  };

  return { JsonDataPost, HookCreatePostAsync, HookGetDataPostAsync };
};

export default usePost;
