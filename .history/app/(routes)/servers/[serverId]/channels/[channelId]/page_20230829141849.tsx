import { currentProfile } from '@/lib/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';

interface ChannelIdPageProps {
    params: { serverId: string; channelId: string };
}

const ChannelIdPage = async ({ params }: ChannelIdPageProps) => {
    const profile = await currentProfile();
    
    (!profile) return redirectToSignIn()

    return <div>channel</div>;
};

export default ChannelIdPage;
