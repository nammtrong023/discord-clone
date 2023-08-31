import db from '@/lib/db';
import { redirect } from 'next/navigation';
import { currentProfile } from '@/lib/current-profile';

const NavigationSidebar = async () => {
    const profile = await currentProfile();

    if (!profile) return redirect('/');

    const servers = await db.server.findMany({
        where: {
            members: {
                some: {
                    profileId: profile.id,
                },
            },
        },
    });

    return <div className='spacey'></div>;
};

export default NavigationSidebar;
