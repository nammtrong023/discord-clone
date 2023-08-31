'use client';

import { Channel, ChannelType, MemberRole, Server } from '@prisma/client';


interface ServerChannelProps {
    channel: Channel;
    server: Server;
    role?: MemberRole;
}
const iconMap = {
    [ChannelType.TEXT] = Hash,
}

const ServerChannel = ({ channel, server, role }: ServerChannelProps) => {
    return <div></div>;
};

export default ServerChannel;
