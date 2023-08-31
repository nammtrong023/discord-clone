'use client';

import { Channel, ChannelType, MemberRole, Server } from '@prisma/client';
import { Hash, Mic } from 'lucide-react';


interface ServerChannelProps {
    channel: Channel;
    server: Server;
    role?: MemberRole;
}
const iconMap = {
    [ChannelType.TEXT]: Hash,
    [ChannelType.AUDIO]: Mic,
    [ChannelType.VIDEO]: Hash,
}

const ServerChannel = ({ channel, server, role }: ServerChannelProps) => {
    return <div></div>;
};

export default ServerChannel;
