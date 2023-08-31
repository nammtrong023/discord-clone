'use client';

import { Channel, MemberRole, Server } from '@prisma/client';


interface ServerChannelProps {
    channel: Channel;
    server: Server;
    role?: MemberRole;
}
const iconMap = {
    
}

const ServerChannel = ({ channel, server, role }: ServerChannelProps) => {
    return <div></div>;
};

export default ServerChannel;
