'use client';
import { createContext } from 'react';
import { io as ClientIO } from 'socket.io-client';

type SocketContextType = {
    socket: any | null;
    isConnected: boolean;
};

createContext<SocketContextType>({ socket: null, isConnected: false });

const SocketProvider = () => {
    return <div></div>;
};

export default SocketProvider;
