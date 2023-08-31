import db from '@/lib/db';
import { currentProfile } from '@/lib/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';
import { ChannelType, MemberRole } from '@prisma/client';
import { redirect } from 'next/navigation';
import ServerHeader from './server-header';
import { ScrollArea } from '../ui/scroll-area';
import ServerSearch from './server-search';
import { Hash, Mic, ShieldAlert, ShieldCheck, Video } from 'lucide-react';
import { channel } from 'diagnostics_channel';

const iconMap = {
    [ChannelType.TEXT]: <Hash className='mr-2 h-4 w-4' />,
    [ChannelType.AUDIO]: <Mic className='mr-2 h-4 w-4' />,
    [ChannelType.VIDEO]: <Video className='mr-2 h-4 w-4' />,
};

const roleIconMap = {
    [MemberRole.GUEST]: null,
    [MemberRole.MODERATOR]: <ShieldCheck className='h-4 w-4 mr-2 text-indigo-500' />,
    [MemberRole.ADMIN]: <ShieldAlert className='h-4 w-4 mr-2 text-indigo-500' />,
};

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

    const role = server.members.find((members) => members.profileId === profile.id)?.role;

    return (
        <div className='flex flex-col h-full w-full text-primary dark:bg-[#2B2D31] bg-[#F2F3F5]'>
            <ServerHeader server={server} role={role} />
            <ScrollArea className='flex-1 px-3'>
                <div className='mt-2'>
                    <ServerSearch
                        data={[
                            {
                                label: 'Text channel',
                                type: 'channel',
                                data: textChannels?.map((channel) => ({
                                    id: channel.id,
                                    name: channel.name,
                                    icon: iconMap[channel.type],
                                })),
                            },
                            {
                                label: 'Text channel',
                                type: 'channel',
                                data: textChannels?.map((channel) => ({
                                    id: channel.id,
                                    name: channel.name,
                                    icon: iconMap[channel.type],
                                })),
                            },
                        ]}
                    />
                </div>
            </ScrollArea>
        </div>
    );
};

export default ServerSidebar;
