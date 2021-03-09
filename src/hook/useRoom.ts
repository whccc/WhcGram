import { useState } from 'react';
import axios from 'axios';
import { URL_API } from '../helpers/EnviromentVariables';
import { IDataRoom, IDataInitialRoom } from '../interfaces/interfaces';

const useRoom = () => {
  const [JsonDataRoom, setJsonDataRoom] = useState<IDataRoom | any>({
    ArrayMessages: [],
  });
  //---------------------------
  // OBTENER DATA ROOM INICIAL
  //---------------------------
  const DataRoomInitialAsync = async (DataRoom: IDataInitialRoom) => {
    try {
      const Data = await axios.post(`${URL_API}/room`, DataRoom);
      if (Data.data.DataRoom.length !== 0) {
        // Data.data.DataRoom[0]._idSendingUser = DataRoom._idSendingUser;
        setJsonDataRoom(Data.data.DataRoom[0]);
        return Data.data.DataRoom[0];
      }
      return DataRoom;
    } catch (Error) {
      return [];
    }
  };
  //--------------------
  // ENVIAR MENSAJE API
  //--------------------
  const SendMessageRoomAsync = async (DataMessage: any) => {
    try {
      await axios.post(`${URL_API}/room/message`, DataMessage);
    } catch (Error) {
      setJsonDataRoom([]);
      alert('Error');
    }
  };
  // ACTUALIZAR ROOM
  const HookUpdateRoomAsync = async () => {
    setJsonDataRoom({
      ArrayMessages: [],
    });
  };
  return {
    DataRoomInitialAsync,
    SendMessageRoomAsync,
    HookUpdateRoomAsync,
    JsonDataRoom,
  };
};

export default useRoom;
