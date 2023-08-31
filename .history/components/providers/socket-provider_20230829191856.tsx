'use client';
import { io as ClientIO } from 'socket.io-client';

type SocketContextType = {
    socket: any | null;
    isConnected: boolean;
};

const SocketProvider = creacon () => {
    return <div></div>;
};

export default SocketProvider;
