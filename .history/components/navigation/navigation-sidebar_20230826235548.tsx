import db from '@/lib/db';
import { redirect } from 'next/navigation';
import { currentProfile } from '@/lib/current-profile';
import NavigationAction from './navigate-action';

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

    return (
        <div className='space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3'>
            <NavigationAction />
            <Separator></Separator>
        </div>
    );
};

export default NavigationSidebar;
