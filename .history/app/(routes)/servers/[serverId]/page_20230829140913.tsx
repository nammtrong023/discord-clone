import { currentProfile } from '@/lib/current-profile';
import { redirectToSignIn } from '@clerk/nextjs';

interface ServerIdPageProps {
    params: { serverId: string };
}

export default async function ServerIdPage({ params }: ServerIdPageProps) {
    const profile = await currentProfile();

    if (!profile) return redirectToSignIn();

    return <main className='min-h-full'>trang chu</main>;
}
