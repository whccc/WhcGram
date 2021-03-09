import io from 'socket.io-client';
import { URL_SOCKETIO } from './EnviromentVariables';
import useLocalStorage from '../hook/useLocalStorage';

const ConectionSocket = async () => {
  const { HookGetDataLocalStorageAsync } = useLocalStorage();
  const Data = await HookGetDataLocalStorageAsync();

  const socket = io(`${URL_SOCKETIO}`, {
    query: {
      myket: Data._id,
    },
  });
  return socket;
};

export default ConectionSocket;
