'use client';

import { Channel, MemberRole } from '@prisma/client';
import { Server } from 'http';

interface ServerChannelProps {
    channel: Channel;
    server: Server;
    role?: MemberRole;
}

const ServerChannel = ({}: ServerChannelProps) => {
    return <div></div>;
};

export default ServerChannel;
