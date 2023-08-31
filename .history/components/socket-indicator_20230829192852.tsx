'use client';

import { useSocket } from './providers/socket-provider';
import { Badge } from './ui/badge';

const SocketIndicator = () => {
    const { isConnected } = useSocket();

    if(!isConnected) {
        return <Badge>
            
        </Badge>
    }


    return <div></div>;
};

export default SocketIndicator;
