import { currentUser, redirectToSignIn } from '@clerk/nextjs';
import db from '@/lib/db';

export aysncconst initialProfile = () => {
    const user = await currentUser();
};
