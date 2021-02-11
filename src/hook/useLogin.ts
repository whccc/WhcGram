import axios from 'axios';
import { URL_API } from '../helpers/EnviromentVariables';

const useLogin = () => {
  //------------------
  // REGISTRO USUARIO
  //------------------
  const HookRegisterUserAsync = async (FormData: any) => {
    const Data = await axios.post(`${URL_API}/Login`, FormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (Data.status === 200) {
      return true;
    }
    return false;
  };

  return { HookRegisterUserAsync };
};

export default useLogin;
