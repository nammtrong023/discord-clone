import { currentProfile } from '@/lib/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const ServerIdLayout = async ({
    children,
    params,
}: {
    params: string;
    children: React.ReactNode;
}) => {
    const profile = await currentProfile();

    if (!profile) redirectToSignIn();

    return <div>{children}</div>;
};

export default ServerIdLayout;
