import db from '@/lib/db';
import { currentProfile } from '@/lib/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';
import { ChannelType } from '@prisma/client';
import { redirect } from 'next/navigation';

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

    const filterChannels = (channelType: ChannelType) => {
        const filter = server?.channels.filter((channel) => channel.type === channelType);

        return filter;
    };

    const textChannels = filterChannels('TEXT');
    const audioChannels = filterChannels('AUDIO');
    const videoChannels = filterChannels('VIDEO');
    const members = server?.members.filter((member) => member.profileId !== profile.id);

    if (!server) return redirect('/');

    const role = 

    return <div></div>;
};

export default ServerSidebar;
