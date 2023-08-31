import { currentProfile } from '@/lib/current-profile';
import db from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';

interface ServerIdPageProps {
    params: { serverId: string };
}

export default async function ServerIdPage({ params }: ServerIdPageProps) {
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
        include: {
            channels: {
                
            }
        }
    });

    return <main className='min-h-full'>trang chu</main>;
}
