'use client';

import { Channel } from '@prisma/client';
import { Server } from 'http';

interface ServerChannelProps {
    channel: Channel;
    server: Server;
    role?: MemberRole;
}

const ServerChannel = () => {
    return <div></div>;
};

export default ServerChannel;
