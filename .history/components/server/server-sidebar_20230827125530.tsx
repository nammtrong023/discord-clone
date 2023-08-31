import { currentProfile } from '@/lib/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';

const ServerSidebar = async ({ serverId }: { serverId: string }) => {
    const profile = await currentProfile();

    if (!profile) return redirectToSignIn();
    return <div></div>;
};

export default ServerSidebar;
