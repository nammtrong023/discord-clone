'use client';
import { io as ClientIO } from 'socket.io-client';
import { createContext } from 'vm';

type SocketContextType = {
    socket: any | null;
    isConnected: boolean;
};

const SocketProvider = createContext<SocketContextType> () => {
    return <div></div>;
};

export default SocketProvider;
