'use client';
import { createContext } from 'react';
import { io as ClientIO } from 'socket.io-client';

type SocketContextType = {
    socket: any | null;
    isConnected: boolean;
};

const SocketProvider = createContext<SocketContextType>({socket: null,isConnected}) => {
    return <div></div>;
};

export default SocketProvider;
