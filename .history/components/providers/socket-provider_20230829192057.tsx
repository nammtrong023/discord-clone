'use client';
import { createContext, useContext } from 'react';
import { io as ClientIO } from 'socket.io-client';

type SocketContextType = {
    socket: any | null;
    isConnected: boolean;
};

const SocketContext = createContext<SocketContextType>({ socket: null, isConnected: false });

export const useSocket = () => {
    return useContext(SocketContext);
};

const SocketProvider = () => {
    return {}
};

export default SocketProvider;
