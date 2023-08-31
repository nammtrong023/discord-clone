import db from '@/lib/db';
import { currentProfile } from '@/lib/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';
import { ChannelType } from '@prisma/client';

const ServerSidebar = async ({ serverId }: { serverId: string }) => {
    const profile = await currentProfile();

    if (!profile) return redirectToSignIn();

    const server = await db.server.findUnique({
        where: {
            id: serverId,
        },
        include: {
            channels: {
                orderBy: {
                    createdAt: 'asc',
                },
            },
            members: {
                include: {
                    profile: true,
                },
                orderBy: {
                    role: 'asc',
                },
            },
        },
    });

    const filterChannels = (channelType: 'TEXT' | 'AUDIO' | 'VIDEO') => {
        const filter = server?.channels.filter(
            (channel) => channel.type === ChannelType.channelType,
        );

        return filter;
    };

    const textChannels = server?.channels.filter((channel) => channel.type === ChannelType.TEXT);
    const audioChannels = server?.channels.filter((channel) => channel.type === ChannelType.AUDIO);
    const videoChannels = server?.channels.filter((channel) => channel.type === ChannelType.VIDEO);
    const members = server?.members.filter((member) => member.id !== profile.id);

    return <div></div>;
};

export default ServerSidebar;
