import { currentUser, redirectToSignIn } from '@clerk/nextjs';
import db from '@/lib/db';

export aysnc const initialProfile = () => {
    const user = await currentUser();
};
