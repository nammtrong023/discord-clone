'use client';

import { useSocket } from './providers/socket-provider';

const SocketIndicator = () => {
    const { isConnected } = useSocket();

    return <div></div>;
};

export default SocketIndicator;
