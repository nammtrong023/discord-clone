import { currentProfile } from '@/lib/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';
import db from '@/lib/db';

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
                    
                }
            }
        },
    });

    return <div>{children}</div>;
};

export default ServerIdLayout;
