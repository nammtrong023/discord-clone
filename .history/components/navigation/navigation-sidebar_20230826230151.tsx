import db from '@/lib/db';
import { redirect } from 'next/navigation';
import { currentProfile } from '@/lib/current-profile';

const NavigationSidebar = async () => {
    const profile = await currentProfile();

    if (!profile) return redirect('/');

    const servers = await db.server.findMany({
        where: {
            
        }
    });

    return <div></div>;
};

export default NavigationSidebar;
