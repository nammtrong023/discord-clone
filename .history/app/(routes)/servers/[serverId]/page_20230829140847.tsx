import { currentProfile } from '@/lib/current-profile';

interface ServerIdPageProps {
    params: { serverId: string };
}

export default async function ServerIdPage({ params }: ServerIdPageProps) {
    const profile = await currentProfile();

    return <main className='min-h-full'>trang chu</main>;
}
