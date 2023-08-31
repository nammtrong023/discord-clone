import { currentProfile } from '@/lib/current-profile';

const ServerIdLayout = async ({
    children,
    params,
}: {
    params: string;
    children: React.ReactNode;
}) => {
    const profile = await currentProfile();

    if(!profile) red

    return <div>{children}</div>;
};

export default ServerIdLayout;
