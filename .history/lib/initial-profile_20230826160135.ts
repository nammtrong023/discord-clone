import { currentUser, redirectToSignIn } from '@clerk/nextjs';
import db from '@/lib/db';

export const initialProfile = () => {
    const user = await currentUser();
};
