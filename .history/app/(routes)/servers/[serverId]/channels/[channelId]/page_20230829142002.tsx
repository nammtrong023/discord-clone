import { currentProfile } from '@/lib/current-profile';
import db from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';

interface ChannelIdPageProps {
    params: { serverId: string; channelId: string };
}

const ChannelIdPage = async ({ params }: ChannelIdPageProps) => {
    const profile = await currentProfile();

    if (!profile) return redirectToSignIn();

    const channel = await db.channel.findUnique({
        where: {
            id: params.channelId,
        },
    });

    const member = await db.member.findFirst({
        where: {
            serverId: params.serverId,
            profileId: params.channelId,
        },
    });

    return <div>channel</div>;
};

export default ChannelIdPage;
