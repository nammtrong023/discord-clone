'use client';

import { useSocket } from './providers/socket-provider';
import { Badge } from './ui/badge';

const SocketIndicator = () => {
    const { isConnected } = useSocket();

    if(!isConnected) {
        return <Badge variant='outline' className='bg-yellow-600'>

        </Badge>
    }


    return <div></div>;
};

export default SocketIndicator;
