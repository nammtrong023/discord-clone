'use client';

import { useSocket } from './providers/socket-provider';

const SocketIndicator = () => {
    const { isConnected } = useSocket();

    if(!isConnected) {
        return 
    }


    return <div></div>;
};

export default SocketIndicator;
