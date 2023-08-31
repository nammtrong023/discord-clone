'use client';
import { createContext } from 'react';
import { io as ClientIO } from 'socket.io-client';

type SocketContextType = {
    socket: any | null;
    isConnected: boolean;
};

const SocketContext = createContext<SocketContextType>({ socket: null, isConnected: false });

export const useSocket

const SocketProvider = () => {
    return <div></div>;
};

export default SocketProvider;
