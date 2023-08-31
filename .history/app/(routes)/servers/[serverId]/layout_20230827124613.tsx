import { currentProfile } from '@/lib/current-profile';

const ServerIdLayout = ({ children, params }: { params: string; children: React.ReactNode }) => {
    const profile = await currentProfile();
    return <div>{children}</div>;
};

export default ServerIdLayout;
