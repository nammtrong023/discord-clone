import { currentProfile } from '@/lib/current-profile';

const NavigationSidebar = async () => {
    const profile = await currentProfile();

    if(!profile) return redi

    return <div></div>;
};

export default NavigationSidebar;
