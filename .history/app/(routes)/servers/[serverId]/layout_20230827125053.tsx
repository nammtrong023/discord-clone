import { currentProfile } from '@/lib/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';
import db from '@/lib/db';
import { redirect } from 'next/navigation';

const ServerIdLayout = async ({
    children,
    params,
}: {
    params: { serverId: string };
    children: React.ReactNode;
}) => {
    const profile = await currentProfile();

    if (!profile) return redirectToSignIn();

    const server = await db.server.findUnique({
        where: {
            id: params.serverId,
            members: {
                some: {
                    profileId: profile.id,
                },
            },
        },
    });

    if (!server) return redirect('/');

    return (
        <div className='h-full'>
            <div className='hidden md:flex h-full w-60 z-20 flex-col inset-y-0'></div>
        </div>
    );
};

export default ServerIdLayout;
