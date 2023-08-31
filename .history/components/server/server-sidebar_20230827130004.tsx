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

    const textChannels = server?.channels.filter((channel) => channel.type === ChannelType.TEXT);
    const textChannels = server?.channels.filter((channel) => channel.type === ChannelType.TEXT);
    const textChannels = server?.channels.filter((channel) => channel.type === ChannelType.TEXT);

    return <div></div>;
};

export default ServerSidebar;
