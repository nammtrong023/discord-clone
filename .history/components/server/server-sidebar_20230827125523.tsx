import { currentProfile } from '@/lib/current-profile';

const ServerSidebar = async ({ serverId }: { serverId: string }) => {
    const profile = await currentProfile();

    if(!profile) return re
    return <div></div>;
};

export default ServerSidebar;
