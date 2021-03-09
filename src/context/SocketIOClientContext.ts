import React from 'react';

interface ISocketIOClient {
  HookConnectionSocketIOAsync: () => Promise<void>;
}

const SocketIOClientContext = React.createContext<ISocketIOClient | any>({});

export default SocketIOClientContext;
