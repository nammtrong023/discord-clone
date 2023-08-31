import { currentProfile } from '@/lib/current-profile';

interface ChannelIdPageProps {
    params: { serverId: string; channelId: string };
}

const ChannelIdPage = async ({ params }: ChannelIdPageProps) => {
    const profile = await currentProfile();
    
    (!profile) return redire

    return <div>channel</div>;
};

export default ChannelIdPage;
