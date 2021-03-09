import React from 'react';

interface IRoomContext {
  DataRoomInitialAsync: (DataRoom: any) => Promise<void>;
}
const RoomContext = React.createContext<IRoomContext | any>({});

export default RoomContext;
