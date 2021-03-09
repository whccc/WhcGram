import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import ConectionSocket from '../helpers/ClientSocketIO';

const useSocketIO = () => {
  const [JsonDataSocket, setJsonDataSocket] = useState({
    IdRoom: null,
    TypeEvent: '',
  });
  const [SocketIOClient, setSocketIOClient] = useState<
    SocketIOClient.Socket | undefined
  >();
  //--------------------
  // CONEXION SOCKET IO
  //--------------------
  const HookConnectionSocketIOAsync = async () => {
    try {
      const ConectionSocketIO = await ConectionSocket();
      setSocketIOClient(ConectionSocketIO);
    } catch (Error) {
      console.log(Error);
    }
  };
  //----------------
  // EMITIR MENSAJES
  //----------------
  const HookEmitMessageAsync = (TypeEvent: string, JsonData: {}) => {
    try {
      if (SocketIOClient !== undefined) {
        SocketIOClient.emit(TypeEvent, JsonData);
      }
    } catch (Error) {
      console.log(Error);
    }
  };

  //-----------------
  // ESCUCHAR SOCKET
  //-----------------
  const HookOnMessageAsync = (TypeEvent: string) => {
    if (SocketIOClient !== undefined) {
      SocketIOClient.on(TypeEvent, (Data: any) => {
        setJsonDataSocket({ ...Data, TypeEvent });
      });
    }
  };
  //--------------------
  // UPDATE DATA SOCKET
  // -------------------
  const HookUpdateDataSocketJson = () => {
    setJsonDataSocket({ IdRoom: null });
  };
  return {
    SocketIOClient,
    HookEmitMessageAsync,
    HookConnectionSocketIOAsync,
    HookOnMessageAsync,
    HookUpdateDataSocketJson,
    JsonDataSocket,
  };
};

export default useSocketIO;
