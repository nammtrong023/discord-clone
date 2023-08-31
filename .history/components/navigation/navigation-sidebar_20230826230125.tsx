import db 
import { redirect } from 'next/navigation';
import { currentProfile } from '@/lib/current-profile';

const NavigationSidebar = async () => {
    const profile = await currentProfile();

    if (!profile) return redirect('/');

    const servers =await db

    return <div></div>;
};

export default NavigationSidebar;
