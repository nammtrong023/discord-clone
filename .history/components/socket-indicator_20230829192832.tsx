'use client';

import { useSocket } from './providers/socket-provider';

const SocketIndicator = () => {
    const {} = useSocket();

    return <div></div>;
};

export default SocketIndicator;
