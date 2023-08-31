import { currentProfile } from '@/lib/current-profile';
import { redirect } from 'next/navigation';

const ServerIdLayout = async ({
    children,
    params,
}: {
    params: string;
    children: React.ReactNode;
}) => {
    const profile = await currentProfile();

    if (!profile) redi;

    return <div>{children}</div>;
};

export default ServerIdLayout;
