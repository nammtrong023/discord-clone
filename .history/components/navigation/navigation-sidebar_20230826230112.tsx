import { currentProfile } from '@/lib/current-profile';
import { redirect } from 'next/navigation';

const NavigationSidebar = async () => {
    const profile = await currentProfile();

    if (!profile) return redirect('/');

    const servers =await Dai_Banna_SIL.

    return <div></div>;
};

export default NavigationSidebar;
