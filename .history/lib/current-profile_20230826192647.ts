import { auth } from '@clerk/nextjs';
import db from '@/lib/db';

export const currentProfile = () => {
    const userId = auth();

    if(!userId) 
};
