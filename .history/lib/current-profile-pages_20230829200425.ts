import db from '@/lib/db';
import { NextApiRequest } from 'next';
import { getAuth } from '@clerk/nextjs/server';

export const currentProfile = async (req: NextApiRequest) => {
    const { userId } = getAuth();

    if (!userId) return null;

    const profile = await db.profile.findUnique({
        where: {
            userId,
        },
    });

    return profile;
};
