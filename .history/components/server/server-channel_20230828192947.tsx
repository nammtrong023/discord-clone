'use client';

import { cn } from '@/lib/utils';
import { Channel, ChannelType, MemberRole, Server } from '@prisma/client';
import { Hash, Mic, Video } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

interface ServerChannelProps {
    channel: Channel;
    server: Server;
    role?: MemberRole;
}
const iconMap = {
    [ChannelType.TEXT]: Hash,
    [ChannelType.AUDIO]: Mic,
    [ChannelType.VIDEO]: Video,
};

const ServerChannel = ({ channel, server, role }: ServerChannelProps) => {
    const router = useRouter();
    const params = useParams();

    const Icon = iconMap[channel.type];

    return (
        <button
            className={cn(
                'group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1',
            )}
            onClick={}
        >
            <Icon ></Icon>
        </button>
    );
};

export default ServerChannel;
